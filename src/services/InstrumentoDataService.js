import http from "../http-common";

class InstrumentoDataService {
  getAll() {
    return http.get("/instrumento");
  }

  get(id) {
    return http.get(`/instrumento/${id}`);
  }

  create(data) {
    return http.post("/instrumento/create", data);
  }

  update(id, data) {
    return http.put(`/instrumento/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/instrumento/${id}`);
  }


}

export default new InstrumentoDataService();