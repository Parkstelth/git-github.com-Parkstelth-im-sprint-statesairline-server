const flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {
    //TODO: 
 

    let list = flights
    if (req.query.departure_times !== undefined) {

      list = flights.filter((item) => {
        return item.departure_times.includes(req.query.departure_times);
      });
      // return res.status(200).json(list);
    }
    if (req.query.arrival_times !== undefined) {

      list = list.filter((item) => {
        return item.arrival_times.includes(req.query.arrival_times);
      });
      // return res.status(200).json(list);
    }
    if (req.query.destination !== undefined) {

      list = list.filter((item) => {
        return item.destination.includes(req.query.destination);
      });
      // return res.status(200).json(list);
    }
    if (req.query.departure !== undefined) {

      list = list.filter((item) => {
        return item.departure.includes(req.query.departure);
      });
      // 
    }
    
    return res.status(200).json(list);
  },
  // [GET] /flight/{:id}
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => {
    //TODO: 

    if (req.params.id!== undefined) {

      list2 = flights.filter((item) => {
        return item.uuid.includes(req.params.id);
      });
      // 
    }
    return res.status(200).json(list2);

  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요청 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    let data;
  
    data = flights.filter((item)=>{
      return item.uuid===req.params.id
    }) //일치하는 데이타
    
    // [{
    //   uuid: 'af6fa55c-da65-47dd-af23-578fdba40bed',
    //   departure: 'ICN',
    //   destination: 'CJU',
    //   departure_times: '2021-12-02T12:00:00',
    //   arrival_times: '2021-12-03T12:00:00'
    // }]
      data =data.map((item)=>{
      if(req.body.departure!==undefined) item.departure=req.body.departure

      if(req.body.destination!==undefined) item.destination=req.body.destination
      
      if(req.body.departure_times!==undefined) item.departure_times=req.body.departure_times
      if(req.body.arrival_times!==undefined) item.arrival_times=req.body.arrival_times
      return item
    })
    
    return res.status(200).json(data[0]);
  }
};
