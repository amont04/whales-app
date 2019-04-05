const PlayerAPI = {
    players: [
      { number: 55, name: "Andrew Robertshaw", nickname: "Andy", position: "OF" },
      { number: 2, name: "Steve Rhodes", nickname: "Sven", position: "IF" },
      { number: 22, name: "Matt Rhodes", nickname: "Matt R", position: "3B" },
      { number: 30, name: "Brian Robertshaw",  nickname: "Forman", position: "RF" },
      { number: 7, name: "Brandon Douglas", nickname: "Dubz", position: "OF" },
      { number: 6, name: "Mike Cranker", nickname: "Cranker", position: "1B" },
      { number: 8, name: "Billy Platt", nickname: "Billy", position: "OF" },
      { number: 2, name: "Eric Robertshaw", nickname: "Tang", position: "IF" },
      { number: 23, name: "Dan McNamara", nickname: "Dan Mac", position: "3B" },
      { number: 99, name: "Steve Dygon",  nickname: "Dygon", position: "RF" },
      { number: 7, name: "Sean Whitty", nickname: "Whitty", position: "OF" }    ],
    all: function() { return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    }
  }
  
  export default PlayerAPI