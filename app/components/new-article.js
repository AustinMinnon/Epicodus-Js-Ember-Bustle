import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    save() {
      var params= {
        title: this.get('title'),
        author: this.get('author'),
        category: this.get('category'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('addNewArticle', false);
      this.sendAction('save', params);
    }
  }
});
