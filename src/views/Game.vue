<template>
  <div class="game">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'game',
  components: {
    
  },
  data: function () {
    return {
      score: 501,
      doubleHit: false,
      tripleHit: false,



      doubleOut: false,
      currentPlayer: '',
      currentIndex: 0,
      shots: [],
      player: [
          {
              name: "Thanh",
              score: 501,
              average: 0,
              points: 0,
              round: 0,
          },
          {
              name: "Paul",
              score: 501,
              average: 0,
              points: 0,
              round: 0,
          },
          {
              name: "Sophie",
              score: 501,
              average: 0,
              points: 0,
              round: 0,
          },
          {
              name: "Flo",
              score: 501,
              average: 0,
              points: 0,
              round: 0,
          },
      ],
    }
  },
  methods: {
    initializeGame: function () {
        this.currentPlayer = this.player[currentIndex];

    },
    addPlayer: function (name, score) {
      this.player.push({
        name,
        score,
        average: 0,
        round: 0,
      })
    },
    shoot: function (value) {
        if (value > (this.player[currentIndex].score -= this.shots.reduce(add,0))) {
            this.shots = [];
            // TODO
            this.nextPlayer()
        }

        if (this.shots.length < 4) {
            this.shots.push(value);
        }

        if (this.shots.length == 3) {
            // füge die Punkte zum Spieler hinzu, berechne den Durchschitt und leere wieder alles
            this.player[currentIndex].score -= this.shots.reduce(add,0);
            this.player[currentIndex].score += this.shots.reduce(add,0);
            this.shots = [];
            this.player[currentIndex].round++;
            this.player[currentIndex].average = this.player[currentIndex].average / this.player[currentIndex].round

            // wenn der letzte dran ist, index wieder auf 0 setzen
            if (currentIndex < this.player.length && currentIndex != this.player.length - 1) {
                this.currentIndex++;
                this.currentPlayer = this.player[currentIndex];
            } else {
                this.currentIndex = 0;
                this.currentPlayer = this.player[0];
            }
        }
    },
    nextPlayer: function () {
        // TODO
    },
    isGameOver: function () {
        this.player.forEach((child) => {
            if (child.score == 0) {
                console.log("Game Over");
            }
        })
    },
    add: function (a, b) {
        return a + b;
    },
  }
}
</script>
