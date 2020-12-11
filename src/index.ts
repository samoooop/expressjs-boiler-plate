import cluster from 'cluster';
import config from 'config';
import os from 'os';
import { app } from './app';
import 'source-map-support/register';

const PORT = config.get('port');
const isProduction = process.env.NODE_ENV === 'production';

const numThread = isProduction ? os.cpus().length : 1;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers.
    for (let i = 0; i < numThread; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died (code ${code} signal ${signal})`);
    });
} else {
    console.log(`Worker ${process.pid} is running`);
    app.listen(PORT);
}
