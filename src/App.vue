<template>
  <div id="app">
    <header class="header">
      <h1>訊息搜尋工具</h1>
      <p>上傳 JSON 檔案並搜尋訊息內容</p>
    </header>

    <main class="main-content">
      <!-- 檔案上傳區域 -->
      <div class="upload-section">
        <label for="file-upload" class="upload-label">
          <input 
            id="file-upload"
            type="file" 
            accept=".json"
            @change="handleFileUpload"
            class="file-input"
          />
          <div class="upload-button">
            <span v-if="!fileName">📁 選擇 JSON 檔案</span>
            <span v-else>✅ {{ fileName }}</span>
          </div>
        </label>
        <p v-if="messages.length > 0" class="file-info">
          已載入 {{ messages.length }} 則訊息
        </p>
      </div>

      <!-- 搜尋區域 -->
      <div class="search-section" v-if="messages.length > 0">
        <div class="search-box">
          <input
            v-model="searchText"
            type="text"
            placeholder="輸入要搜尋的文字..."
            class="search-input"
            @input="performSearch"
          />
          <div class="search-stats" v-if="searchText">
            找到 {{ filteredMessages.length }} 則匹配的訊息
          </div>
        </div>
      </div>

      <!-- 搜尋結果 -->
      <div class="results-section" v-if="filteredMessages.length > 0">
        <div 
          v-for="message in filteredMessages" 
          :key="message.id"
          class="message-item"
        >
          <div class="message-header">
            <span class="message-time">{{ formatDate(message.date) }}</span>
            <span class="message-from">{{ message.from || '未知發送者' }}</span>
          </div>
          <div class="message-text" v-html="highlightText(message.text)"></div>
        </div>
      </div>

      <!-- 無結果提示 -->
      <div v-if="searchText && filteredMessages.length === 0 && messages.length > 0" class="no-results">
        <p>沒有找到包含「{{ searchText }}」的訊息</p>
      </div>

      <!-- 初始提示 -->
      <div v-if="messages.length === 0" class="welcome-message">
        <p>👋 歡迎使用訊息搜尋工具</p>
        <p>請先上傳一個 JSON 格式的聊天記錄檔案</p>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'App',
  setup() {
    const messages = ref([])
    const searchText = ref('')
    const fileName = ref('')

    // 處理檔案上傳
    const handleFileUpload = async (event) => {
      const file = event.target.files[0]
      if (!file) return

      fileName.value = file.name

      try {
        const text = await file.text()
        const data = JSON.parse(text, 'UTF-8')
        
        // 提取 messages 陣列
        if (data.messages && Array.isArray(data.messages)) {
          messages.value = data.messages.filter(msg => 
            msg.text && 
            typeof msg.text === 'string' && 
            msg.text.trim() !== ''
          )
        } else {
          alert('檔案格式不正確，找不到 messages 陣列')
        }
      } catch (error) {
        alert('檔案解析失敗，請確認是有效的 JSON 格式')
        console.error('JSON parse error:', error)
        console.log('JSON parse error:', error)
      }
    }

    // 搜尋功能
    const filteredMessages = computed(() => {
      if (!searchText.value.trim()) {
        return []
      }
      
      return messages.value.filter(message => 
        message.text && 
        message.text.toLowerCase().includes(searchText.value.toLowerCase())
      )
    })

    // 執行搜尋（目前由 computed 自動處理）
    const performSearch = () => {
      // 這個函數可以用於未來添加額外的搜尋邏輯
    }

    // 格式化日期
    const formatDate = (dateString) => {
      if (!dateString) return '未知時間'
      
      try {
        const date = new Date(dateString)
        return date.toLocaleString('zh-TW', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      } catch {
        return dateString
      }
    }

    // 高亮顯示搜尋文字
    const highlightText = (text) => {
      if (!searchText.value.trim() || !text) return text
      
      const regex = new RegExp(`(${searchText.value})`, 'gi')
      return text.replace(regex, '<mark>$1</mark>')
    }

    return {
      messages,
      searchText,
      fileName,
      filteredMessages,
      handleFileUpload,
      performSearch,
      formatDate,
      highlightText
    }
  }
}
</script>