import { Meteor } from 'meteor/meteor'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin'
const { ProjectsBundle } = require('gitlab')

export const createIssue = new ValidatedMethod({
  name: 'createIssue',
  mixins: [CallPromiseMixin],
  validate: null,
  run({ title, description }) {
    if (Meteor.isServer) {
      const api = new ProjectsBundle({
        url: 'https://gitlab.com',
        token: '4ykTNcsNnw9scnDFXAhv',
      })

      let projectId = '10852033'

      api.Issues.create(projectId, {
        title,
        description,
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })

      return 'result'
    }
  },
})
