import { expect, test } from "playwright/test";
import {request} from 'playwright'
let apiRequestContext:any;
test.beforeEach('Setup',async ()=>{
    apiRequestContext = await request.newContext();
})

test('@json -Get',async ()=>{
    const getResponse = await apiRequestContext.get('https://jsonplaceholder.typicode.com/posts');
    console.log('GET /posts status:', getResponse.status());
})
