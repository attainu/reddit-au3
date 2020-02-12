const Sequelize = require('sequelize')
const sequelize = require('../config')

const comment = sequelize.define('comments', {
  // author: { type: Schema.Types.ObjectId, ref: 'User', allowNull: false },
  body: { type: Sequelize.STRING, allowNull: false },
  created: { type: Sequelize.DATE, default: Sequelize.DATE }
});

const post = sequelize.define('posts', {
  title: { type: Sequelize.STRING, allowNull: false },
  url: { type: Sequelize.STRING },
  // author: { type: Schema.Types.ObjectId, ref: 'User', allowNull: false },
  category: { type: Sequelize.STRING, allowNull: false },
  score: { type: Sequelize.INTEGER, default: 0 },
  // votes: [{ user: Schema.Types.ObjectId, vote: Number, _id: false }],
  // comments: [commentSchema],
  created: { type: Sequelize.DATE, default: Sequelize.DATE},
  views: { type: Sequelize.INTEGER, default: 0 },
  type: { type: Sequelize.STRING, default: 'link', allowNull: false },
  text: { type: Sequelize.STRING },
});


// post.virtual('upvotePercentage').get(function () {
//   if (this.votes.length === 0) return 0;
//   const upvotes = this.votes.filter(vote => vote.vote === 1);
//   return Math.floor((upvotes.length / this.votes.length) * 100);
// });

// post.methods.vote = function (user, vote) {
//   const existingVote = this.votes.find(item => item.user._id.equals(user));

//   if (existingVote) {
    
//     this.score -= existingVote.vote;
//     if (vote === 0) {
     
//       this.votes.pull(existingVote);
//     } else {
      
//       this.score += vote;
//       existingVote.vote = vote;
//     }
//   } else if (vote !== 0) {
    
//     this.score += vote;
//     this.votes.push({ user, vote });
//   }

//   return this.save();
// };

// post.methods.addComment = function (author, body) {
//   this.comments.push({ author, body });
//   return this.save();
// };

// post.methods.removeComment = function (id) {
//   const comment = this.comments.id(id);
//   if (!comment) throw new Error('Comment not found');
//   comment.remove();
//   return this.save();
// };

// post.pre(/^find/, function () {
//   this.populate('author').populate('comments.author');
// });

// post.pre('save', function (next) {
//   this.wasNew = this.isNew;
//   next();
// });

// post.post('save', function (doc, next) {
//   if (this.wasNew) this.vote(this.author._id, 1);
//   doc
//     .populate('author')
//     .populate('comments.author')
//     .execPopulate()
//     .then(() => next());
// });


module.exports = post;
