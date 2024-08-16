const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['Backlog', 'In Discussion', 'In Progress', 'Done'],
    default: 'Backlog'
  },
  tags: [String],
  dueDate: {
    type: Date
  },
  assignedUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',  
    required: true
  },
}, {
  timestamps: true 
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
