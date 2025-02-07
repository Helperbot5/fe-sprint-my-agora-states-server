const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const discussion = discussionsData.filter(data => data.id === +id)[0];
    // id 앞에 +를 붙여서 number로 형변환
    if(!discussion) {
      res.status(404).send('Not Found')
    }
  res.status(200).json(discussion);
  }

};

module.exports = {
  discussionsController,
};
