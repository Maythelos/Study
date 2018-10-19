// maythelos-skills
let ajaxData = {
  name: 'Mathelos',
  front_end_skills: [
    'Html', 'Html5', 'Css', 'Css3', 'JavaScript', 'Bootstrap', 'JQuery', 'Vue.js'
  ],
  front_end_skills_power: [
    80, 60, 80, 60, 70, 50, 50, 50
  ],
  back_end_skills: [
    'PHP', 'MySQL', 'ThinkPHP3', 'ThinkPHP5'
  ],
  back_end_skills_power: [
    70, 70, 70, 70
  ],
  other_skills: [
    '微信小程序', 'Ajax', 'Json', 'SQLserver', 'Git', 'GitHub'
  ],
  other_skills_power: [
    70, 80, 80, 60, 50, 30
  ],
  maxlength: []
};
new Vue({
  el: '#app1',
  components: {
    'maythelos-skills': {
      template:
      `
        <table border = '1'>
          <tr>{{name}}</tr>
          <tr>
            <th>font</th>
            <th>f_power</th>
            <th>back</th>
            <th>b_power</th>
            <th>other</th>
            <th>o_power</th>
          </tr>
          <tr v-for= "(nothing,index) in maxlength">
            <td>{{front_end_skills[index]}}</td>
            <td><input type='text' v-model = "front_end_skills_power[index]"></td>
            <td>{{back_end_skills[index]}}</td>
            <td><input type='text' v-model = "back_end_skills_power[index]"></td>
            <td>{{other_skills[index]}}</td>
            <td><input type='text' v-model = "other_skills_power[index]"></td>
          </tr>
        </table>
      `,
      data: function () {
        let data = ajaxData
        let max = data.front_end_skills_power.length
        if (data.back_end_skills.length > max)
          max = data.back_end_skills.length
        else if (data.other_skills.length > max)
          max = data.other_skills.length
        for(let i=0; i<max; i++) {
          data.maxlength[i] = 1
        }
        return data
      }
    }
  }
})

// maythelos
new Vue({
  el: '#app2',
  components: {
    maythelos: {
      template: `<button @click = "toggle_like()">赞 ！{{like_count}}</button>`,
      data: function () {
        return {
          like_count: 10,
          liked: false
        }
      },
      methods: {
        toggle_like: function () {
          if (!this.liked)
            this.like_count++
          else
            this.like_count--
          this.liked = !this.liked
        }
      },

    }
  }
})
