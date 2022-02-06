import { post as march25_2021 } from "./GameDev/March25_2021/post";
import { post as april6_2021 } from "./GameDev/April6_2021/post";
import { post as april19_2021 } from "./GameDev/April19_2021/post";
import { post as may3_2021 } from './GameDev/May3_2021/post';
import { post as june4_2021 } from './GameDev/June4_2021/post';
import { post as feb6_2022 } from './Misc/Feb6_2022/post';

export const posts = [
	feb6_2022,
	june4_2021,
	may3_2021,
	april19_2021,
	april6_2021,
	march25_2021,
];

const gamedev = {
	id:"gamedev",
	name:"Game Dev",
	posts:[1,2,3,4,5]
}
/*
const unity = {
	id:"unity",
	name:"Unity",
	posts:[]
}
*/
const misc = {
	id:"misc",
	name:"Miscellaneous",
	posts:[0]
}
/*
const archived = {
	id:"archived",
	name:"Archived",
	posts:[]
}
*/

export const database = [
	gamedev,
	misc,
]