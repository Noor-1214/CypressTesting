## Assertions
### Implicit Assertions
aka built in assertions, default assertions
- should (include, equal, contain, exists) (not.contain, not.equal)
- end (add multiple things after capturing a url once)


### Explicit Assertions
need to write explicity 
- expect (BDD Style)
expect (actName).to.equal(expName)
- assert (TDD Style)
assert.equal (actName,expName)


## Tags
.skip (skips the particlar it block while executing)
it.skip("should visit the page",()=>{
    ...
    ...
    ...
})

.only (executes the particular it block alone)
it.only("dummy block",()=>{
    ...
    ...
})


## IFrames
- get the IFrame through ID
- go to the document, check if its visible
- wrap it
- perform any operation

##Upload Files
- always keep the files to upload in fixture folder
- use attachFile command