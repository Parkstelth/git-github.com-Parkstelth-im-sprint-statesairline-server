const flights = require('../repository/flightList');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 데이터 혹은 요청 된 flight_uuid, phone 값과 동일한 예약 데이터를 조회합니다.
  findById: async (req, res) => {
    //TODO: 
    let list = booking
    if (req.query.flight_uuid!== undefined) {

      list = list.filter((item) => {
        return item.flight_uuid.includes(req.query.flight_uuid);
      });
      return res.status(200).json(list);
    }
    if (req.query.phone!== undefined) {

      list = list.filter((item) => {
        return item.phone.includes(req.query.phone);
      });
      return res.status(200).json(list[0]); //연습
    }

    return res.status(200).json(booking);
  },

  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: async (req, res) => {
   
    booking.push(req.body)
    return res.status(201).json({ message: 'Create success!' });
  },

  // [DELETE] /book?phone={phone} 요청을 수행합니다.
  // 요청 된 phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteById: async (req, res) => {
    //TODO: 
    booking = booking.filter((item)=>{
      return item.phone!==req.query.phone
    })
    
    
    return res.status(200).json(booking);
  }
};
