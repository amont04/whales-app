const ScheduleAPI = {
    games: [
      { opponent: "Mohawks", field: "2"},
      { opponent: "Hosers", field: "2"}
    ],
    all: function() { return this.games},
    get: function(id) {
      const isGame = g => g.opponent === id
      return this.game.find(isGame)
    }
  }
  
  export default ScheduleAPI