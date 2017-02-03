'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
//require resources / tools above







router.get('/', (req, res, next) => {
    knex('questions')
        .select('id', 'title', 'description', 'price', 'item_image')
        .orderBy('id')
    .then((rows) => {
            const quizQuestions = (rows);
            res.send(quizQuestions);
        })
        .catch((err) => {
            next(err);
        });
});

// router.get('/:id', (req, res, next) => {
//   knex('questions')
//     .where({id: req.params.id})
//     .first()
//     .select('id', 'title', 'description', 'price','item_image')
//     .then(post => res.json(post))
//     .catch(err => next(err))
// });

//
// router.post('/', (req, res, next) => {
//
// const newClassified = {
//   id: req.body.id,
//   title: req.body.title,
//   description: req.body.description,
//   price: req.body.price,
//   item_image:req.body.item_image
// };
//   knex('questions')
//     .insert(newClassified, ['id','title','description','price','item_image'])
//     .then(function(data){
//       res.send(data[0]);
//     })
//     .catch(function(err){
//       res.send(err);
//     });
// });

//
// router.patch('/:id', (req, res, next)=>{
//   const editClassified = {
//     title: req.body.title,
//     description: req.body.description,
//     price: req.body.price,
//     item_image:req.body.item_image
//   }
//   knex('classifieds')
//   .where({id: req.params.id})
//   .update(editClassified, ['id','title','description','price','item_image'])
//   .then(function(data){
//     res.send(data[0])
//   })
//   .catch(function(err){
//     res.send(err)
//   })
// })


// router.delete('/:id', (req, res, next)=>{
//   let temObj;
//   knex('classifieds')
//   .where({id: req.params.id})
//   .first()
//   .then(function(msg){
//     let tempObj = {
//       id : msg.id,
//       title: msg.title,
//       description: msg.description,
//       price: msg.price,
//       item_image: msg.item_image
//     };
//     temObj = tempObj;
//   })
//   knex('classifieds')
//   .where({id : req.params.id})
//   .del()
//   .then(function(data){
//     res.send(temObj)
//   })
//   .catch(function(err){
//     res.send(err)
//   })
// })

module.exports = router;
