window.onload = function() {let seats = document.querySelector(".all-seats");
      for (var i = 0; i < 6; i++) {
        let booked = 0;
        seats.insertAdjacentHTML(
          "beforeend",
          '<input type="checkbox" name="tickets" id="s' +
            (i + 2) +
            '" /><label for="s' +
            (i + 2) +
            '" class="seat ' +
            booked +
            '"></label>'
        );
      }
    }
    function fetchJSONData() {
        fetch("./data.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error
                        (`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => 
                  console.log(data))
            .catch((error) => 
                   console.error("Unable to fetch data:", error));
    }
    /*
    This method would load the json file and would update seat availability for the corresponding date selected in the UI
    */
    function generateSeats(){
        fetchJSONData()
    }
    