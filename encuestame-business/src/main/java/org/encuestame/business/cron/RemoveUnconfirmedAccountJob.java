/*
 ************************************************************************************
 * Copyright (C) 2001-2010 encuestame: system online surveys Copyright (C) 2009
 * encuestame Development Team.
 * Licensed under the Apache Software License version 2.0
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to  in writing,  software  distributed
 * under the License is distributed  on  an  "AS IS"  BASIS,  WITHOUT  WARRANTIES  OR
 * CONDITIONS OF ANY KIND, either  express  or  implied.  See  the  License  for  the
 * specific language governing permissions and limitations under the License.
 ************************************************************************************
 */
package org.encuestame.business.cron;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.encuestame.business.service.imp.SecurityOperations;
import org.encuestame.persistence.dao.IAccountDao;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Remove unconfirmed account Job.
 * @author Morales, Diana Paola paolaATencuestame.org
 * @since Jul 19, 2011
 * @version $Id:$
 */
public class RemoveUnconfirmedAccountJob {

    /** {@link IAccountDao} **/
    @Autowired
    private IAccountDao accountDao;

    /** {@link SecurityOperations} **/
    @Autowired
    private SecurityOperations securityService;

    /**
     * Log.
     */
    private static final Log log = LogFactory.getLog(RemoveUnconfirmedAccountJob.class);

    public RemoveUnconfirmedAccountJob() {
        // TODO Auto-generated constructor stub
        log.debug("Unconfirmed Account Const");
    }

    /**
     * Remove unconfirmed accounts.
     */
    public void removeUnconfirmedAccount(){
        try {
          getSecurityService().removeUnconfirmedAccount(Boolean.FALSE);
        } catch (Exception e) {
          log.error("Owner account not found to change status");
        }
    }

    /**
    * @return the accountDao
    */
    public IAccountDao getAccountDao() {
        return accountDao;
    }

    /**
    * @param accountDao the accountDao to set
    */
    public void setAccountDao(IAccountDao accountDao) {
        this.accountDao = accountDao;
    }

    /**
    * @return the securityService
    */
    public SecurityOperations getSecurityService() {
        return securityService;
    }

    /**
    * @param securityService the securityService to set
    */
    public void setSecurityService(SecurityOperations securityService) {
        this.securityService = securityService;
    }
}
