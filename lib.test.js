const { test, expect}=require("@jest/globals")
const lib=require("./lib")
test("sum([1,2]) should be 3",()=>{
    expect(lib.sum([1,2])).toBe(3);

})
test("avg([-5,5]) should be 0",()=>{
    expect(lib.avg([-5,5])).toBe(0);
    
})
test("max([0,3,2]) should be 3",()=>{
    expect(lib.max([0,3,2])).toBe(3);
    
})
test("avg([1,3]) should be 2",()=>{
    expect(lib.avg([1,3])).toBe(2);
    
})
test("min([2,1,3,4]) should be 1",()=>{
    expect(lib.min([2,1,3,4])).toBe(1);
    
})
test("med([5,1,2,3,3]) should be 3",()=>{
    expect(lib.med([5,1,2,3,3])).toBe(3);
    
})
test("med([1,2,4,4]) should be 3",()=>{
    expect(lib.med([1,2,4,4])).toBe(3);
    
})