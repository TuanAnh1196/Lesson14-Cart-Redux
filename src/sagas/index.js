import { all, fork } from "redux-saga/effects";
import { watchShopListSagaAsync } from "./shop.list.saga"

export default function* sagas(){
    yield all([
        fork(watchShopListSagaAsync)
    ]);
}