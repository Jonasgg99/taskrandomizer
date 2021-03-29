
const categories = [
  {name:'Inntekt', tasks:['kontakt arbeidsgiver','skriv søknad','redigere artikkel på snl']},
  {name:'Kreativ', tasks:['filme scene', 'skrive script','redigere','skrive']},
  {name:'Utleie', tasks:['vaske klær', 'vaske do','rydde i et skap','ta ned gardiner','vask dusj']},
  {name:'Kompetanseutvikling', tasks:['FullStack kursing','Jobbe på app:taskrandomizer', 'Jobbe på app:spisopp','WebSec-kurs','Undersøke master']},
  {name:'Sunnhet', tasks:['lage mat m betak','kroppslig stell','klippe hår']},
  
]

const categoryReducer = (state = categories, 
  action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default categoryReducer