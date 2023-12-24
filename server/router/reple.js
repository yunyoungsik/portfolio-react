const express = require("express");
const router = express.Router();

// 스키마 만들기
const { Counter } = require("../model/Counter.js");
const { Reple } = require("../model/Reple.js");


// 글 쓰기
router.post("/write", (req, res) => {
    let temp = {
        author: req.body.author,
        password: req.body.password,
        content: req.body.content,
    };

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.repleNum = counter.repleNum; // 번호 추가

            const RepleWrite = new Reple(temp);
            RepleWrite
                .save()
                .then(() => {
                    Counter.updateOne({ name: "counter" }, { $inc: { repleNum: 1 } }).then(() => {
                        res.status(200).json({ success: true });
                    })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

// 글목록
router.post("/list", (req, res) => {
    Reple.find()
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, repleList: result })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// 글 수정하기
router.post("/modify", (req, res) => {
    let temp = {
        author: req.body.author,
        content: req.body.content
    }
    Reple.updateOne({ repleNum: Number(req.body.repleNum) }, { $set: temp })
        .exec()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// 글 삭제하기
router.post("/delete", (req, res) => {
    Reple.deleteOne({ repleNum: Number(req.body.repleNum) })
        .exec()
        .then(() => {
            res.status(200).json({ success: true })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

module.exports = router;