<template>
  <form @submit.prevent="submitForm">
      <label>email:</label>
      <input type="email" required v-model="email">

      <label>password:</label>
      <input type="password" required v-model="password">
      <div v-if="passwordErr" class='error'>{{ passwordErr }}</div>

      <label>Role:</label>
      <select v-model="role">
          <option value="crazycat">crazy cat</option>
          <option value="wildcat">wild cat</option>
          <option value="grumpycat">grumpy cat</option>
      </select>

      <label>skills:</label>
      <input type="text" v-model="tempSkill" @keyup="addSkill">
      <div v-for="skill in skills" :key="skill" class="pill">
          <span @click="deleteMe(skill)">{{ skill }}</span>
      </div>

      <div class="terms">
          <input type="checkbox" required v-model="terms">
          <label>accept terms/contitions</label>
      </div>

      <div>
          <input type="checkbox" value="tinny" v-model="names">
          <label>tinny</label>
      </div>
      <div>
          <input type="checkbox" value="stormy" v-model="names">
          <label>stormy</label>
      </div>

      <div class="submit">
          <button>Create</button>
      </div>
  </form>

  <p>email: {{ email }}</p>
  <p>pswd: {{ password }}</p>
  <p>role: {{ role }}</p>
  <p>terms: {{ terms }}</p>
  <p>names: {{ names }}</p>

</template>

<script>
export default {
    data() {
        return {
            email: '', // any of these could be set with a default value here
            password: '', 
            role: 'wildcat',
            terms: false,
            names: [],
            tempSkill: '',
            skills: [],
            passwordErr: '', 
        }
    }, 

    methods: {
        addSkill(e) {
            if(e.key === ',' && this.tempSkill) { // when the comma is clicked and tempSkill is not blank
                // console.log('ts: ' + this.tempSkill.split(',')[0])
                // console.log(this.skills.includes(this.tempSkill.split(',')[0]))
                if(!this.skills.includes(this.tempSkill.split(',')[0])) {  // removes duplicates
                    this.skills.push(this.tempSkill.split(',')[0])  // push the current 'bufffer' to the skills array
                }
                this.tempSkill = ''
            }
            // console.log('s: ' + this.skills)
        }, 

        deleteMe(skill) {
            this.skills = this.skills.filter( (item) => {
                return skill !== item 
            })
        }, 

        // this would normally submit the data to a DB, we will just valdate some data
        // and then output the data to the console.
        submitForm() {
            console.log('form...')
            
            // validate password
            this.passwordErr = this.password.length > 8 ? '' : 'password must be at least 8 chars long'
            if (!this.passwordErr) {
                console.log('email:',this.email)
                console.log('password:',this.password)
                console.log('role:',this.role)
                console.log('skills:',this.skills)
                console.log('terms:',this.terms)
            }
        }
    }

}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  input[type=checkbox] {
      display: inline-block;
      width: 16px;
      margin: 0 10px 0 0;
      top: 2px;
  }

   .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }

  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer; 
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>