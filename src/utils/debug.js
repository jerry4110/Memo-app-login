// 디버깅 유틸리티
export const logAPIError = (error, context) => {
  console.error(`[${context}] API Error:`, {
    message: error.message,
    response: error.response?.data,
    status: error.response?.status,
    config: {
      url: error.config?.url,
      method: error.config?.method
    }
  })
}

export const logAPIResponse = (response, context) => {
  console.log(`[${context}] API Response:`, {
    status: response.status,
    data: response.data
  })
}

