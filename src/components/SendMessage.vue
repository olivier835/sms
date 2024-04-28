<!-- <template>
  <div class="sms-form-container">
    <h1>Envoyer un SMS</h1>
    <form @submit.prevent="sendSMS">
      <div class="form-group">
        <label for="phoneNumbers">Numéros de téléphone (séparés par des virgules):</label>
        <input id="phoneNumbers" v-model="sms.phoneNumbers" type="text" required placeholder="Ex: 1234567890, 0987654321">
        <p v-if="errors.phoneNumbers" class="error">{{ errors.phoneNumbers }}</p>
      </div>
      <div class="form-group">
        <label for="messageContent">Message:</label>
        <textarea id="messageContent" v-model="sms.content" required></textarea>
      </div>
      <button type="submit" class="submit-btn">Envoyer SMS</button>
    </form>
  </div>
</template> -->

/*<script>
export default {
  data() {
    return {
      sms: {
        phoneNumbers: '',
        content: ''
      },
      errors: {
        phoneNumbers: null,
      }
    };
  },
  methods: {
    validatePhoneNumbers() {
      const regex = /^\d{10}$/;
      const numbers = this.sms.phoneNumbers.split(',').map(number => number.trim());
      const invalidNumbers = numbers.filter(number => !regex.test(number));

      if (invalidNumbers.length > 0) {
        this.errors.phoneNumbers = `Les numéros suivants sont invalides: ${invalidNumbers.join(', ')}`;
        return false;
      }
 this.errors.phoneNumbers = null;
      return true;
    },
    sendSMS() {
      if (this.validatePhoneNumbers()) {
        console.log(`Sending SMS to ${this.sms.phoneNumbers}: ${this.sms.content}`);
        // Reset fields
        this.sms.phoneNumbers = '';
        this.sms.content = '';
      }
    }
    }
}
</script>*/


<template>
  <div class="sms-form-container">
    <h1>Envoyer un SMS</h1>
    <form @submit.prevent="sendSMS">
      <div class="form-group">
        <label for="phoneNumbers">Numéros de téléphone (séparés par des virgules):</label>
        <input id="phoneNumbers" v-model="sms.phoneNumbers" type="text" required placeholder="Ex: 1234567890, 0987654321">
        <p v-if="errors.phoneNumbers" class="error">{{ errors.phoneNumbers }}</p>
      </div>
      <div class="form-group">
        <label for="messageContent">Message:</label>
        <textarea id="messageContent" v-model="sms.content" required></textarea>
      </div>
      <div class="form-group">
        <label>Langue de traduction :</label>
        <div class="language-selection">
          <label v-for="(lang, key) in languages" :key="key">
            <input type="radio" v-model="selectedLanguage" :value="key">
            {{ lang.name }}
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="scheduledDate">Date d'envoi programmé :</label>
        <input id="scheduledDate" type="date" v-model="scheduledDate">
      </div>
      <div class="form-group">
        <label for="scheduledTime">Heure d'envoi programmé :</label>
        <input id="scheduledTime" type="time" v-model="scheduledTime">
      </div>
      <button type="submit" class="submit-btn">Envoyer SMS</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        // Ajoutez des propriétés pour stocker la date et l'heure sélectionnées
      scheduledDate: '',
      scheduledTime: '',
      sms: {
        phoneNumbers: '',
        content: ''
      },
      errors: {
        phoneNumbers: null,
      },
      selectedLanguage: 'FR', // Par défaut, la langue française est sélectionnée pour la traduction
      languages: {
        'FR': { name: 'Français' },
        'EN': { name: 'Anglais' },
        'NL': { name: 'Néerlandais' }
      }
    };
  },
  methods: {
    validatePhoneNumbers() {
      const regex = /^\d{10}$/;
      const numbers = this.sms.phoneNumbers.split(',').map(number => number.trim());
      const invalidNumbers = numbers.filter(number => !regex.test(number));

      if (invalidNumbers.length > 0) {
        this.errors.phoneNumbers = `Les numéros suivants sont invalides: ${invalidNumbers.join(', ')}`;
        return false;
      }
      this.errors.phoneNumbers = null;
      return true;
    },
    sendSMS() {
      if (this.validatePhoneNumbers()) {
        console.log(`Sending SMS to ${this.sms.phoneNumbers}: ${this.sms.content}`);
        // Reset fields
        this.sms.phoneNumbers = '';
        this.sms.content = '';
        this.scheduledDate = '';
        this.scheduledTime = '';
      }
    }
    
  }
}
</script>




<style>
.language-selection label {
  margin-right: 10px;
}
.error {
  color: red;
  margin: 10px 0;
}

.sms-form-container {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.sms-form h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #666;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.form-group textarea {
  resize: vertical;
  height: 100px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #003580;
}
</style>