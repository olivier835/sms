<template>
  <div>
    <h1>Messages</h1>
    <ul>
      <li v-for="message in messages" :key="message.id">{{ message.content }}</li>
    </ul>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  data() {
    return {
      messages: []
    };
  },
  async created() {
    try {
      this.messages = await apiService.fetchMessages();
    } catch (error) {
        alert('Failed to fetch messages!');
        }
        }
}
</script>