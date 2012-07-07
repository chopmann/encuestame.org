package org.encuestame.site.web.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.encuestame.site.web.util.Location;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

/**
 * Resolves the user's geo location from client-submitted query parameters, if present in the request.
 */
public class UserLocationHandlerInterceptor implements HandlerInterceptor {

    public static final String USER_LOCATION_ATTRIBUTE = "userLocation";

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Double latitude = ServletRequestUtils.getDoubleParameter(request, "latitude");
        Double longitude = ServletRequestUtils.getDoubleParameter(request, "longitude");
        if (latitude != null && longitude != null) {
            request.setAttribute(USER_LOCATION_ATTRIBUTE, new Location(latitude, longitude));
        }
        return true;
    }

    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    }

    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    }

}
