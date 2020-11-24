export const request=(config)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      ...config,
      success:(result)=>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err);
      }
    });
  })
}