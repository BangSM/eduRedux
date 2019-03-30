// action creator : 액션을 생성한 func
export const updateUser = (name) => ({
  type : 'updateUser',
  payload : {
    user : name
  }
})