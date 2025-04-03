'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
    // let res = await db.collection('current-ssq-lottery-info').get();
	// let res = await db.collection('current-ssq-lottery-info').count();
	// let res = await db.collection('current-ssq-lottery-info').add(event);
	// let res = await db.collection('current-ssq-lottery-info').doc("67ceef777c8de46baf7ba535").get();
	// let res = await db.collection('current-ssq-lottery-info').limit(5).get();
	// let res = await db.collection('current-ssq-lottery-info').limit(5).skip(5).get();
	// let res = await db.collection('current-ssq-lottery-info').orderBy("_id","asc").get();
	// let res = await db.collection('current-ssq-lottery-info').field({"lotteryDate": true}).get();
	// let res = await db.collection('current-ssq-lottery-info').where({"_id":"67ceef777c8de46baf7ba535"}).get();
	// let res = await db.collection('current-ssq-lottery-info').where({"picSrc": dbCmd.eq("/static/ssq.png")}).get();
	// let res = await db.collection('current-ssq-lottery-info').where({"lotteryDes": dbCmd.in(["双色球 第2025100期"])}).get();
	// let res = await db.collection('current-ssq-lottery-info').where({"lotteryDes": dbCmd.and(dbCmd.gt(4), dbCmd.lt(12)).get();
	// let res = await db.collection('current-ssq-lottery-info').where({"lotteryDes": dbCmd.and(dbCmd.gt(4), dbCmd.lt(12)).get();
	// let res = await db.collection('current-ssq-lottery-info').doc("67ceef777c8de46baf7ba535").update(
	// 	{
	// 		"lotteryDes": "双色球 第2026021期",
	// 	})
	// let res = await db.collection('current-ssq-lottery-info').where({
	// 	_id: dbCmd.in(["67dc27f87ae708a34627eb4a","67dc27f87ae708a34627eb4b"])
	// }
	// ).update(
	// 	{
	// 		"lotteryDes": "双色球 第2026021期",
	// 	})
	
	// let res = await db.collection('current-ssq-lottery-info').where({
	// 	_id: dbCmd.in(["67dc27f87ae708a34627eb4a","67dc27f87ae708a34627eb4b"])
	// }
	// ).update(
	// 	{
	// 		"lotteryNumDataArr": {
	// 			0: {
	// 				"number": "9"
	// 			}
	// 		}
	// 	})
	
	// let res = await db.collection('current-ssq-lottery-info').doc("67dc27f87ae708a34627eb4a").set(
	// 	{
	// 		"lotteryNumDataArr": "111111"
	// 	})
	
	// let res = await db.collection('current-ssq-lottery-info').doc("67dc27f87ae708a34627eb4a").remove()
	let res = await db.collection('current-ssq-lottery-info').where(
	{
		"lotteryFrequnency": "周二/四/日"
	}
	).remove()
	
	// let res = await db.collection('current-ssq-lottery-info').add(
	{
	    "picSrc": "/static/ssq.png",
	    "lotteryDes": "双色球   第2025100期",
	    "lotteryDate": "2025-03-20(四)",
	    "lotteryFrequnency": "周二/四/日",
	    "lotteryNumDataArr": [
	        {
	            "color": "red",
	            "number": "6"
	        },
	        {
	            "color": "red",
	            "number": "6"
	        },
	        {
	            "color": "red",
	            "number": "7"
	        },
	        {
	            "color": "red",
	            "number": "7"
	        },
	        {
	            "color": "red",
	            "number": "7"
	        },
	        {
	            "color": "red",
	            "number": "7"
	        },
	        {
	            "color": "blue",
	            "number": "8"
	        }
	    ]
	});
	return res;
};
