import './pre-start'; // Must be the first import to load env variables

import envVars from './config/EnvVars';
import server from './server';

// **** Start handlers **** //

// **** Start server **** //
const msg = 'Express server started on port: ' + envVars.port.toString();
server.listen(envVars.port, () => console.info(msg));
