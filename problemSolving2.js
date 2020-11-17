var arr = [{
    name: "Arsenal",
    points: 99,
    GD: 45
  },
  {
    name: "Chelsea",
    points: 75,
    GD: 39
  },
  {
    name: "Manchester United",
    points: 60,
    GD: 29
  },
  {
    name: "Liverpool",
    points: 88,
    GD: 39
  },
  {
    name: "Manchester City",
    points: 88,
    GD: 57
  },
  {
    name: "Aston Villa",
    points: 60,
    GD: 29
  },
  {
    name: "Everton",
    points: 60,
    GD: 29
  }];
  
  function customSort(arr){
    let result = arr.sort((a, b) => {
      if(a.points === b.points && a.GD === b.GD){
        if(a.name > b.name){
          return 1;
        }
        else return -1;
      }
      if(a.points === b.points){
        return b.GD - a.GD;
      }
      return b.points - a.points;
    } );
    console.log(result);
  }
  
  customSort(arr);