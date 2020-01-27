<template>
  <div class="row">
    <div class="booking-form">
      <!-- <form class="form-search" @submit="formSubmit"> -->
      <div class="col-md-8">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            placeholder="Enter Address, zip, city or airport"
            v-model="destination"
          />
          <span class="form-label">Destination</span>
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <select class="form-control" v-model="guests">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <span class="select-arrow"></span>
          <span class="form-label">Guests</span>
        </div>
      </div>
      <div class="col-md-2">
        <div class="form-group">
          <select class="form-control" v-model="children">
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
          <span class="select-arrow"></span>
          <span class="form-label">Children</span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <input class="form-control" type="date" required v-model="check_in" />
          <span class="form-label">Check In</span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <input class="form-control" type="date" required v-model="check_out" />
          <span class="form-label">Check out</span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-btn">
          <input
            type="button"
            v-on:click="formSubmit"
            name="submit-btn"
            class="submit-btn"
            value="Check availability"
          />
        </div>
      </div>
      <!-- </form> -->
    </div>
    <div class="result col-12 text-left">
      <h2>Result</h2>
      <div class="table-responsive">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">bookingKey</th>
              <th scope="col">searchType</th>
              <th scope="col">flightType</th>
              <th scope="col">from</th>
              <th scope="col">to</th>
              <th scope="col">isPopular</th>
              <th scope="col">isRecommended</th>
              <!-- <th>journeys</th> -->
              <th>fullPrice</th>
              <th>identifier</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="flight in flights" v-bind:key="flight.bookingKey">
              <td>
                <a href="#" v-on:click="goToPayment(flight.bookingKey)">{{ flight.bookingKey }}</a>
              </td>
              <td>{{ flight.searchType }}</td>
              <td>{{ flight.flightType }}</td>
              <td>{{ flight.from }}</td>
              <td>{{ flight.to }}</td>
              <td>{{ flight.isPopular }}</td>
              <td>{{ flight.isRecommended }}</td>
              <!-- <td>{{ flight.journeys }}</td> -->
              <td>{{ flight.fareDetail.routeFare.fullPrice }}</td>
              <td>{{ flight.identifier }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    msg: String
  },
  data: function() {
    return {
      destination: "CNX",
      guests: 1,
      children: 0,
      check_in: this.today(),
      check_out: "",
      flights: []
    };
  },
  methods: {
    today: function() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      return yyyy + "-" + mm + "-" + dd;
    },
    goToPayment: function(bookingKey) {
      this.$router.push({
        name: "Payment",
        params: { bookingKey: bookingKey }
      });
    },
    formSubmit: function(e) {
      this.errors = {};
      console.log(e);
      this.axios
        .get(
          "https://dev-services.travizgo.com/flight/api/search?adultCount=1&childCount=0&infantCount=0&cabinClass=ECONOMY&currency=THB&from=BKK&fromPreferCity=true&to=" +
            this.destination +
            "&toPreferCity=false&per_page=300&departureDate=" +
            this.check_in +
            "&airlines"
        )
        .then(response => {
          this.flights = response.data.data.data_list;
          console.log(response.data.data.data_list);
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
          this.flights = error;
        });
    },
    handleReset() {
      // console.log("reset");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.result {
  padding: 20px;
  background: #fff;
  margin-top: 40px;
}
</style>
