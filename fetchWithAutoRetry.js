
/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return fetcher().catch(e => {
    if(maximumRetryCount === 0){
      throw (e)
    }else{
      return fetchWithAutoRetry(fetcher,maximumRetryCount-1)
    }
  })
}
