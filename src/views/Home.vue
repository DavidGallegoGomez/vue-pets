<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend.</h1>
    <br>
    <p>Total Dogs: {{ getAllDogs.length }}</p>
    <p>Total Cats: {{ getAllCats.length }}</p>
    <p>Total Animals: {{ animalsCount }}</p>
    <br>
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>
    <br>
    <b-form @submit.prevent="onSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet´s Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.name"
          required
          placeholder="Pet´s name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet´s Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Pet´s Age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  data: () => ({
    showPetForm: false,
    formData: {
      name: '',
      species: null,
      age: 0
    }
  }),
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllDogs',
      'getAllCats',
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    onSubmit() {
      const { species, age, name } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload);

      // Reset form after submit
      this.formData = {
        name: '',
        species: null,
        age: 0
      }
    }
  }
};
</script>
