<template>
  <div>
    <h1>Meteor + Gitlab Issue</h1>Title:
    <input type="text" v-model="title">
    <br>Description:
    <input type="textarea" v-model="description">
    <br>
    <button @click="submit">Submit Issue</button>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import { createIssue } from "/api/methods.js";

export default {
  name: "App",
  data() {
    return { title: "Title", description: "Description" };
  },
  methods: {
    submit() {
      let doc = {
        title: this.title || "No-Title",
        description: this.description || "No-Description"
      };

      createIssue
        .callPromise(doc)
        .then(res => {
          alert("Issued");
        })
        .catch(err => {
          console.log(err);
        });

      // Meteor call
      // Meteor.call("createIssue", doc, (err, res) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     alert("Issued");
      //   }
      // });
    }
  }
};
</script>
