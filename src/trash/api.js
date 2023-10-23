



export const fetchProducts = async () => {
    try {
      const response = await fetch('./dummy.json'); 
      if (!response.ok) {
        throw new Error('데이터를 가져올 수 없습니다.');
      }
      console.log("fetch complete")
      return response.json();
    } catch (error) {
      throw new Error('데이터를 가져오는 중 오류가 발생했습니다.');
    }
  };