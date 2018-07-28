export default store => next => action => {
  const { callAPI, ...rest } = action;
  if (!callAPI) return next(action);


  fetch(callAPI)
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(response => next({ ...rest, response }));

};