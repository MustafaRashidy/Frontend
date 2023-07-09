<template>
  <div class="container d-flex justify-content-center align-items-center" style="margin-top: 50px;">
    <div class="card mb-3 mx-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="../assets/friseur.jpg" class="card-img img-fluid rounded-start" alt="..." style="max-width: 100%; height: auto;
  max-height: 500px;">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">Max Mustermann</h5>
            <p class="card-text">Herzlich Willkommen! Mein Name ist Max Mustermann und ich bin ein leidenschaftlicher Friseur mit langjähriger Erfahrung. Ich bin stolz darauf, meinen Kunden aus Berlin und Umgebung professionelle Friseurdienstleistungen anzubieten.</p>
            <p class="card-text"><small class="text-body-secondary"></small></p>
            <p class="card-text">
              Durchschnittliche Bewertung:
              {{ renderStars(calculateAverageRating()) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mx-3">
      <div class="card-header">
        Termin buchen
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ShowCalender">
            Terminkalender anzeigen
          </button>
          <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#ShowDeleteAppointment">Termin stornieren</button>
        </h5>
      </div>
    </div>
  </div>
  <div class="modal fade" id="ShowDeleteAppointment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Termin stornieren</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit="submitForm">
            <div class="mb-3">
              <label for="deleteFirstName" class="form-label">Vorname</label>
              <input type="text" class="form-control" id="deleteFirstName" v-model="deleteFirstName" required>
            </div>
            <div class="mb-3">
              <label for="deleteLastName" class="form-label">Nachname</label>
              <input type="text" class="form-control" id="deleteLastName" v-model="deleteLastName" required>
            </div>
            <button type="button" class="btn btn-danger" @click="deleteAppointment">Termin stornieren</button>
          </form>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>

  <div class="modal fade" id="ShowCalender" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Termin buchen</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit="submitForm">
            <div class="mb-3">
              <label for="firstName" class="form-label">Vorname</label>
              <input type="text" class="form-control" id="firstName" v-model="firstName" required>
            </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">Nachname</label>
              <input type="text" class="form-control" id="lastName" v-model="lastName" required>
            </div>
            <div class="mb-3">
              <label for="date" class="form-label">Datum</label>
              <input type="date" class="form-control" id="date" v-model="date" required @input="disableSundays">
            </div>
            <div class="mb-3">
              <label for="time" class="form-label">Uhrzeit</label>
              <select class="form-select" id="time" v-model="time" required>
                <option v-for="(time, index) in availableTimes" :key="index" :value="time">{{ time }}</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary" @click="createAppointment">Termin buchen</button>
          </form>
        </div>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>

  <div class="custom-container">
    <!--<div class="card">
      <div class="card-header">
        Termin buchen
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ShowCalender">
            Terminkalender anzeigen
          </button>
          <button type="button" class="btn btn-danger" data-bs-target="#ShowDeleteAppointment">Termin löschen</button>
        </h5>
      </div>
    </div>
    <div class="mb-3">
      <label for="deleteFirstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="deleteFirstName" v-model="deleteFirstName" required>
    </div>
    <div class="mb-3">
      <label for="deleteLastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="deleteLastName" v-model="deleteLastName" required>
    </div>
    <button type="button" class="btn btn-danger" @click="deleteAppointment">Termin löschen</button> -->
  </div>

  <div class="modal fade" id="WriteReview" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Bewertung erstellen</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit="submitForm">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" id="firstName" v-model="firstNameCustomer" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Nachname</label>
              <input type="text" class="form-control" id="lastName" v-model="lastNameCustomer" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Bewertung:&nbsp;</label>
              <select v-model="rating">
                <option v-for="number in ratings" :key="number" :value="number">{{ number }}</option>
              </select>
              <label class="form-label">&nbsp;Sterne</label>
            </div>
            <div class="mb-3">
              <label class="form-label">Titel</label>
              <input type="text" class="form-control" id="title" v-model="title" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Details</label>
              <input type="text" class="form-control" id="ratingDetails" v-model="ratingDetails" required>
            </div>
            <button type="submit" class="btn btn-primary" @click="createReview">Bewertung abschicken</button>
          </form>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card-body" style="margin-top: 100px;">
      <h5 class="card-title d-flex align-items-start mt-5 mb-4">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#WriteReview">
          Bewertung schreiben
        </button>
      </h5>
    </div>
    <div class="row">
      <div class="col-md-4 col-lg-3" v-for="review in reviews" :key="review.id">
        <div class="card mb-3 review-card">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ review.title }}</h5>
            <p class="card-text">{{ review.ratingDetails }}</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">
              Bewertung: {{ renderStars(review.rating) }} <br>
              Kunde: {{ review.firstNameCustomer }}, {{ review.lastNameCustomer }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Friseur1View',
  data () {
    return {
      firstName: '',
      lastName: '',
      date: '',
      time: '',
      times: [
        '10:00 - 10:30',
        '10:30 - 11:00',
        '11:00 - 11:30',
        '11:30 - 12:00',
        '12:00 - 12:30',
        '12:30 - 13:00',
        '13:00 - 13:30',
        '13:30 - 14:00',
        '14:00 - 14:30',
        '14:30 - 15:00',
        '15:00 - 15:30',
        '15:30 - 16:00',
        '16:00 - 16:30',
        '16:30 - 17:00',
        '17:00 - 17:30',
        '17:30 - 18:00'
      ],
      appointments: [],
      deleteFirstName: '',
      deleteLastName: '',
      firstNameCustomer: '',
      lastNameCustomer: '',
      rating: null,
      ratings: [1, 2, 3, 4, 5],
      title: '',
      ratingDetails: '',
      reviews: [],
      selectedImage: null
    }
  },

  mounted () {
    this.fetchAppointments()
    this.fetchReviews()
  },

  methods: {
    fetchAppointments () {
      fetch('http://localhost:8080/api/v1/persons')
        .then(response => response.json())
        .then(appointments => {
          this.appointments = appointments
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Termindaten:', error)
        })
    },

    fetchReviews () {
      fetch('http://localhost:8080/api/v1/reviews')
        .then(response => response.json())
        .then(reviews => {
          this.reviews = reviews
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Reviewdaten:', error)
        })
    },
    handleFileChange (event) {
      this.selectedImage = event.target.files[0]
    },

    disableSundays (event) {
      const selectedDate = new Date(event.target.value)
      const dayOfWeek = selectedDate.getDay()

      if (dayOfWeek === 0) {
        event.target.value = ''
        alert('Sonntags haben wir geschlossen.')
      }
    },

    async createAppointment () {
      console.log(this.firstName)
      console.log(this.lastName)
      console.log(this.date)
      console.log(this.time)

      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
        date: this.date,
        time: this.time
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v1/persons', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    },

    filterAvailableTimes (appointments) {
      const filteredTimes = this.times.filter(time => {
        return !this.appointments.some(
          appointment => appointment.date === this.date && appointment.time === time
        )
      })

      return filteredTimes
    },
    deleteAppointment () {
      const firstName = this.deleteFirstName
      const lastName = this.deleteLastName

      // Überprüfen, ob ein Termin mit den angegebenen Vor- und Nachnamen existiert
      const appointmentExists = this.appointments.some(
        appointment => appointment.firstName === firstName && appointment.lastName === lastName
      )

      if (!appointmentExists) {
        alert('Der angegebene Termin existiert nicht.')
        return
      }

      // API-Anfrage zum Löschen des Termins
      fetch(`http://localhost:8080/api/v1/persons/deleteByFirstAndLastName?firstName=${firstName}&lastName=${lastName}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            alert('Der Termin wurde erfolgreich gelöscht.')

            // Termin aus der lokalen Terminliste entfernen
            this.appointments = this.appointments.filter(
              appointment => appointment.firstName !== firstName || appointment.lastName !== lastName
            )

            // Verfügbare Zeiten aktualisieren
            this.times.push(this.time)
          } else {
            alert('Fehler beim Löschen des Termins.')
          }
        })
        .catch(error => {
          console.error('Fehler beim Löschen des Termins:', error)
          alert('Ein Fehler ist aufgetreten: ' + error.message)
        })

      // Setze die Eingabefelder zurück
      this.deleteFirstName = ''
      this.deleteLastName = ''
    },
    async createReview () {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        firstNameCustomer: this.firstNameCustomer,
        lastNameCustomer: this.lastNameCustomer,
        rating: this.rating,
        title: this.title,
        ratingDetails: this.ratingDetails
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v1/reviews', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    },
    renderStars (rating) {
      return '★'.repeat(rating) + '☆'.repeat(5 - rating)
    },
    calculateAverageRating () {
      if (this.reviews.length === 0) {
        return 0 // Keine Bewertungen vorhanden
      }

      const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0)
      const averageRating = Math.round(totalRating / this.reviews.length)
      return averageRating
    }

  },
  computed: {
    availableTimes () {
      return this.filterAvailableTimes()
    }
  }

}

</script>
<style scoped>
.review-card {
  width: 300px; /* Ändere die Breite entsprechend deinen Anforderungen */
}
.custom-container {
  max-width: 600px; /* Hier kannst du die maximale Breite nach Bedarf anpassen */
  margin-left: auto;
  margin-right: auto;
}

</style>
