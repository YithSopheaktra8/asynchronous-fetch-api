"use strict";

import { CardProduct } from "../components/cardProduct.js";
import { User } from "../components/user.js";
import { getData } from "../store/fetchApi.js";

const render = document.querySelector("#render");
const render_user = document.querySelector("#render_user");

getData("products.json").then((data) => {
	data.forEach((product) => {
		render.innerHTML += CardProduct(product);
	});
});

getData("users.json").then((data) => {
	data.forEach((user) => {
		render_user.innerHTML += User(user);
	});
});
