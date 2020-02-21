new Vue({
  el: "#app",
  data: {
    monsterHealth: 100,
    playerHealth: 100,
    GameIsRun: false
  },
  methods: {
    startGame: function() {
      (this.GameIsRun = true),
        (this.monsterHealth = 100),
        (this.playerHealth = 100);
    },
    attack: function() {
      let damege = Math.floor(Math.random() * 15) + 5;
      this.monsterHealth -= damege;
      damege != 0;

      if (this.monsterHealth <= 1) {
        alert("تبریک! شما برنده شدید");
        this.GameIsRun = false;
        return (this.monsterHealth = 1);
      }

      damege = Math.floor(Math.random() * 15) + 5;
      this.playerHealth -= damege;
      damege != 0;

      if (this.playerHealth <= 1) {
        alert("متاسفم! هیولا برنده شد");
        this.GameIsRun = false;
        return (this.playerHealth = 1);
      }
    },
    specialAttack: function() {
      let damege = Math.floor(Math.random() * 30) + 15;
      this.monsterHealth -= damege;
      damege = 0;

      if (this.monsterHealth <= 1) {
        alert("تبریک! شما برنده شدید");
        this.GameIsRun = false;
        return (this.playerHealth = 1);
      }
    },
    heal: function() {
      let health = Math.floor(Math.random() * 15) + 3;
      this.playerHealth += health;

      if (this.playerHealth >= 99) {
        alert("شما در حداکثر سلامت هستید");
        return (this.playerHealth = 100);
      }
    },
    giveUp: function() {
      this.playerHealth = 0;
      alert("شما تسلیم شدید!");
    }
  }
});
