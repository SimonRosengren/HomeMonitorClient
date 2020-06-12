const apiUri = "https://simon-rosengren-home-monitor.herokuapp.com/";

class ServiceClient {
    async getLatestMoisture() {
        try {
            const data = await fetch(`${apiUri}api/soilMoisture/latest`, {
                headers: {
                    'x-api-key': 'abcdefg123456789',
                    'Content-Type': 'application/json'

                }
            });
            const result = await data.json();
            return result;
        } catch (error) {
            console.log(error)
            // handle error
        }
    }
}

export default ServiceClient;