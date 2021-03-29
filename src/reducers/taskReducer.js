
const tasks = [
  {name:'kontakt arbeidsgiver', category:'Finans'},
  {name:'skrive søknad', category:'Finans'},
  {name:'redigere artikkel på snl', category:'Finans'},
  {name:'filme scene', category:'Kreativ'},
  {name:'skrive script', category:'Kreativ'},
  {name:'redigere', category:'Kreativ'},
  {name:'skrive', category:'Kreativ'},
  {name:'vaske klær', category:'Utleie'},
  {name:'vaske do', category:'Utleie'},
  {name:'rydde i et skap', category:'Utleie'},
  {name:'ta ned gardiner', category:'Utleie'},
  {name:'vaske dusj', category:'Utleie'},
  {name:'FullStack kursing', category:'Kompetanse'}
]

const taskReducer = (state = tasks, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default taskReducer