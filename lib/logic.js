/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Track the migration of a virtual machine from one cloud another cloud
 * @param {org.cloudfederationblockchain.network.Migrate} Migration to be processed
 * @transaction
 */
async function migrateVirtualMachine(migrate) {
        migrate.virtualMachine.operator = migrate.newOperator;
        let assetRegistry= await
    getAssetRegistry('org.cloudfederationblockchain.network.VirtualMachine');
        await assetRegistry.update(migrate.virtualMachine);
    }
