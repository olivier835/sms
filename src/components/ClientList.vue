<template>
  <div class="container">
    <h1>Liste des Contacts</h1>
    <div v-if="clientList.length">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clientList" :key="client.id">
            <td>{{ client.id }}</td>
            <td>{{ client.nom }}</td>
            <td>{{ client.email }}</td>
            <td>{{ client.tel }}</td>
            <td>
              <!-- Les boutons d'action comme afficher, modifier, et supprimer -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      Aucun client trouvé.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientList: [],
    };
  },
  created() {
    this.fetchClients();
  },
  methods: {
    async fetchClients() {
      try {
        const response = await fetch('http://localhost:8000/api/clients'); // Assuming the correct endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.clientList = await response.json();
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    },
  }
};
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 20px;
}
</style>