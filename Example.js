import {Observable} from 'rxjs';
import express from 'express';
import next from 'next';
import api from './src/server/api/index.js';
function AsyncStream (oberever){
    var t1 = setInterval(()=>{
        oberever.next(Math.random());
    }, 1000);
}

var observ = Observable.create(AsyncStream);
observ.subscribe(res=>Listner(res));
function Listner(res){
    console.log(res);
}