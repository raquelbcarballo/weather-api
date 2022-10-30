/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {
    DefaultService: any;

    /**
     * Get Bulk History Daily City Country
     * Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.
     * @param city City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
     * @param state Full name of state.
     * @param country Country Code (2 letter).
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenACityInTheFormatOfCitystOrCityTheStateAndCountry(
        city?: any,
        state?: any,
        country?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/daily?city={city}&country={country}',
            path: {
                'city': city,
                'country': country,
            },
            query: {
                'state': state,
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Daily City
     * Returns Historical Observations - Given a City ID.
     * @param cityId City ID. Example: 4487042
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenACityId(
        cityId?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/daily?city_id={city_id}',
            path: {
                'city_id': cityId,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Daily IP
     * Returns Historical Observations - Given IP Address, or auto.
     * @param ip IP Address, or auto. Example: ip=auto
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenIpAddressOrAuto(
        ip?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/daily?ip={ip}',
            path: {
                'ip': ip,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Daily Lat Lon
     * Returns Historical Observations - Given a lat, and lon.
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenALatAndLon(
        lat?: any,
        lon?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/daily?lat={lat}&lon={lon}',
            path: {
                'lat': lat,
                'lon': lon,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Daily Postal Code
     * Returns Historical Observations - Given a Postal Code.
     * @param postalCode Postal Code. Example: 28546
     * @param country Country Code (2 letter).
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenAPostalCode(
        postalCode?: any,
        country?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/daily?postal_code={postal_code}',
            path: {
                'postal_code': postalCode,
            },
            query: {
                'country': country,
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Daily Station
     * Returns Historical Observations - Given a station ID.
     * @param station Station ID.
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenAStationId(
        station?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/daily?station={station}',
            path: {
                'station': station,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Hourly City & Country
     * Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.
     * @param city City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
     * @param state Full name of state.
     * @param country Country Code (2 letter).
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenACityInTheFormatOfCitystOrCityTheStateAndCountry1(
        city?: any,
        state?: any,
        country?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/hourly?city={city}&country={country}',
            path: {
                'city': city,
                'country': country,
            },
            query: {
                'state': state,
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Hourly City
     * Returns Historical Observations - Given a City ID.
     * @param cityId City ID. Example: 4487042
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenACityId1(
        cityId?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/hourly?city_id={city_id}',
            path: {
                'city_id': cityId,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Hourly IP
     * Returns Historical Observations - Given IP Address, or auto.
     * @param ip IP Address, or auto. Example: ip=auto
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenIpAddressOrAuto1(
        ip?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/hourly?ip={ip}',
            path: {
                'ip': ip,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Hourly Lat & Lon
     * Returns Historical Observations - Given a lat, and lon.
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenALatAndLon1(
        lat?: any,
        lon?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/hourly?lat={lat}&lon={lon}',
            path: {
                'lat': lat,
                'lon': lon,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Hourly Postal Code
     * Returns Historical Observations - Given a Postal Code.
     * @param postalCode Postal Code. Example: 28546
     * @param country Country Code (2 letter).
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenAPostalCode1(
        postalCode?: any,
        country?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/hourly?postal_code={postal_code}',
            path: {
                'postal_code': postalCode,
            },
            query: {
                'country': country,
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk History Hourly Station
     * Returns Historical Observations - Given a station ID.
     * @param station Station ID.
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenAStationId1(
        station?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/history/hourly?station={station}',
            path: {
                'station': station,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Bulk File
     * **(Advanced/Advanced+/Enterprise plans only)** Downloads bulk data files - OPTIONS: (forecast16d.json.gz - 16 day forecasts for cities > 1000 population, current.json.gz - Current observations for cities > 1000 population).
     * @param file Filename (ie. forecast16d.json.gz)
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static advancedadvancedenterprisePlansOnlyDownloadsBulkDataFilesOptionsForecast16Djsongz16DayF(
        file?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bulk/{file}',
            path: {
                'file': file,
            },
            query: {
                'key': key,
            },
        });
    }

    /**
     * Get Current Cities
     * **(Advanced/Advanced+/Enterprise plans only)** Returns a group of Current Observations - Given a list of City IDs.
     * @param cities Comma separated list of City ID's. Example: 4487042, 4494942, 4504871
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param marine Marine stations only (buoys, oil platforms, etc)
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @param city A city name
     * @throws ApiError
     */
    public static advancedadvancedenterprisePlansOnlyReturnsAGroupOfCurrentObservationsGivenAListOfCity(
        cities?: any,
        units?: any,
        marine?: any,
        lang?: any,
        callback?: any,
        key?: any,
        city?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/current?city={city}',
            query: {
                'cities': cities,
                'units': units,
                'marine': marine,
                'lang': lang,
                'callback': callback,
                'key': key,
                'city': city,
            },
        });
    }

    /**
     * Get Current IP
     * Returns a Current Observation - Given an IP address, or auto.
     * @param ip IP Address, or auto. Example: ip=auto
     * @param marine Marine stations only (buoys, oil platforms, etc)
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsACurrentObservationGivenAnIpAddressOrAuto(
        ip?: any,
        marine?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/current?ip={ip}',
            path: {
                'ip': ip,
            },
            query: {
                'marine': marine,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Current Lat & Lon
     * Returns a Current Observation - given a lat, and a lon.
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param marine Marine stations only (buoys, oil platforms, etc)
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsACurrentObservationGivenALatAndALon(
        lat?: any,
        lon?: any,
        marine?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/current?lat={lat}&lon={lon}',
            path: {
                'lat': lat,
                'lon': lon,
            },
            query: {
                'marine': marine,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Current Postla Code Code
     * Returns current weather observation - Given a Postal Code.
     * @param postalCode Postal Code. Example: 28546
     * @param country Country Code (2 letter).
     * @param marine Marine stations only (buoys, oil platforms, etc)
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsCurrentWeatherObservationGivenAPostalCode(
        postalCode?: any,
        country?: any,
        marine?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/current?postal_code={postal_code}',
            path: {
                'postal_code': postalCode,
            },
            query: {
                'country': country,
                'marine': marine,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Current Station Station
     * Returns a Current Observation - Given a station ID.
     * @param station Station ID.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsACurrentObservationGivenAStationId(
        station?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/current?station={station}',
            path: {
                'station': station,
            },
            query: {
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Current Stations Stations
     * **(Advanced/Advanced+/Enterprise plans only)** Returns a group of Current Observations - Given a list of Station Call IDs.
     * @param stations Comma separated list of Station Call ID's. Example: KRDU,KBFI,KVNY
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static advancedadvancedenterprisePlansOnlyReturnsAGroupOfCurrentObservationsGivenAListOfStati(
        stations?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/current?stations={stations}',
            path: {
                'stations': stations,
            },
            query: {
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast 3hourly City & Country
     * Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
     *
     * @param city City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
     * @param state Full name of state.
     * @param country Country Code (2 letter).
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsA3HourlyForecastWhereEachPointRepresentsAThreeHourPeriodEveryPointHasADatet(
        city?: any,
        state?: any,
        country?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/3hourly?city={city}&country={country}',
            path: {
                'city': city,
                'country': country,
            },
            query: {
                'state': state,
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast 3hourly City
     * Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
     *
     * @param cityId City ID. Example: 4487042
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsA3HourlyForecastWhereEachPointRepresentsAThreeHourPeriodEveryPointHasADatet1(
        cityId?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/3hourly?city_id={city_id}',
            path: {
                'city_id': cityId,
            },
            query: {
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast 3hourly IP
     * Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
     *
     * @param ip IP Address, or auto. Example: ip=auto
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsA3HourlyForecastWhereEachPointRepresentsAThreeHourPeriodEveryPointHasADatet2(
        ip?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/3hourly?ip={ip}',
            path: {
                'ip': ip,
            },
            query: {
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast 3hourly Lat & Lon
     * Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
     *
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsA3HourlyForecastWhereEachPointRepresentsAThreeHourPeriodEveryPointHasADatet3(
        lat?: any,
        lon?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/3hourly?lat={lat}&lon={lon}',
            path: {
                'lat': lat,
                'lon': lon,
            },
            query: {
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast 3hourly Postla Code Code
     * Returns a 3-hourly forecast, where each point represents a three hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
     *
     * @param postalCode Postal Code. Example: 28546
     * @param country Country Code (2 letter).
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsA3HourlyForecastWhereEachPointRepresentsAThreeHourPeriodEveryPointHasADatetim(
        postalCode?: any,
        country?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/3hourly?postal_code={postal_code}',
            path: {
                'postal_code': postalCode,
            },
            query: {
                'country': country,
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast Daily City & Country
     * **(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC. Accepts a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.
     *
     * @param city City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
     * @param state Full name of state.
     * @param country Country Code (2 letter).
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static requiredBasicPlanOrHigherReturnsADailyForecastWhereEachPointRepresentsOneDay24HrPeri(
        city?: any,
        state?: any,
        country?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/daily?city={city}&country={country}',
            path: {
                'city': city,
                'country': country,
            },
            query: {
                'state': state,
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast Daily City
     * **(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.
     *
     * @param cityId City ID. Example: 4487042
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static requiredBasicPlanOrHigherReturnsADailyForecastWhereEachPointRepresentsOneDay24HrPeri1(
        cityId?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/daily?city_id={city_id}',
            path: {
                'city_id': cityId,
            },
            query: {
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast Daily IP
     * **(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.
     *
     * @param ip IP Address, or auto. Example: ip=auto
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static requiredBasicPlanOrHigherReturnsADailyForecastWhereEachPointRepresentsOneDay24HrPeri2(
        ip?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/daily?ip={ip}',
            path: {
                'ip': ip,
            },
            query: {
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast Daily Lat & Lon
     * **(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.
     *
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static requiredBasicPlanOrHigherReturnsADailyForecastWhereEachPointRepresentsOneDay24HrPeri3(
        lat?: any,
        lon?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/daily?lat={lat}&lon={lon}',
            path: {
                'lat': lat,
                'lon': lon,
            },
            query: {
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast Daily Postla Code Code
     * **(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.
     *
     * @param postalCode Postal Code. Example: 28546
     * @param country Country Code (2 letter).
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static requiredBasicPlanOrHigherReturnsADailyForecastWhereEachPointRepresentsOneDay24HrPeri4(
        postalCode?: any,
        country?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/daily?postal_code={postal_code}',
            path: {
                'postal_code': postalCode,
            },
            query: {
                'country': country,
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast Hourly City & Country
     * **(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC. Accepts a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.
     *
     * @param city City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
     * @param state Full name of state.
     * @param country Country Code (2 letter).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param hours Number of hours to return.
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static requiredDeveloperPlanOrHigherReturnsAnHourlyForecastWhereEachPointRepresentsAOneHour(
        city?: any,
        state?: any,
        country?: any,
        units?: any,
        lang?: any,
        callback?: any,
        hours?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/hourly?city={city}&country={country}',
            path: {
                'city': city,
                'country': country,
            },
            query: {
                'state': state,
                'units': units,
                'lang': lang,
                'callback': callback,
                'hours': hours,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast Hourly City
     * **(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
     *
     * @param cityId City ID. Example: 4487042
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param hours Number of hours to return.
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static requiredDeveloperPlanOrHigherReturnsAnHourlyForecastWhereEachPointRepresentsAOneHour1(
        cityId?: any,
        units?: any,
        lang?: any,
        callback?: any,
        hours?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/hourly?city_id={city_id}',
            path: {
                'city_id': cityId,
            },
            query: {
                'units': units,
                'lang': lang,
                'callback': callback,
                'hours': hours,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast Hourly IP
     * **(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
     *
     * @param ip IP Address, or auto. Example: ip=auto
     * @param days Number of days to return. Default 5.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param hours Number of hours to return.
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static requiredDeveloperPlanOrHigherReturnsAnHourlyForecastWhereEachPointRepresentsAOneHour2(
        ip?: any,
        days?: any,
        units?: any,
        lang?: any,
        callback?: any,
        hours?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/hourly?ip={ip}',
            path: {
                'ip': ip,
            },
            query: {
                'days': days,
                'units': units,
                'lang': lang,
                'callback': callback,
                'hours': hours,
                'key': key,
            },
        });
    }

    /**
     * Get Forecast Hourly Lat & Lon
     * **(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
     *
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @param hours Number of hours to return.
     * @throws ApiError
     */
    public static requiredDeveloperPlanOrHigherReturnsAnHourlyForecastWhereEachPointRepresentsAOneHour3(
        lat?: any,
        lon?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
        hours?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/hourly?lat={lat}&lon={lon}',
            path: {
                'lat': lat,
                'lon': lon,
            },
            query: {
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
                'hours': hours,
            },
        });
    }

    /**
     * Get Forecast Hourly Postla Code Code
     * **(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.
     *
     * @param postalCode Postal Code. Example: 28546
     * @param country Country Code (2 letter).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param hours Number of hours to return.
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static requiredDeveloperPlanOrHigherReturnsAnHourlyForecastWhereEachPointRepresentsAOneHour4(
        postalCode?: any,
        country?: any,
        units?: any,
        lang?: any,
        callback?: any,
        hours?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/forecast/hourly?postal_code={postal_code}',
            path: {
                'postal_code': postalCode,
            },
            query: {
                'country': country,
                'units': units,
                'lang': lang,
                'callback': callback,
                'hours': hours,
                'key': key,
            },
        });
    }

    /**
     * Get History Daily City & Country
     * Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param city City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
     * @param state Full name of state.
     * @param country Country Code (2 letter).
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenACityInTheFormatOfCitystOrCityTheStateAndCountry2(
        city?: any,
        state?: any,
        country?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/daily?city={city}&country={country}',
            path: {
                'city': city,
                'country': country,
            },
            query: {
                'state': state,
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Daily City
     * Returns Historical Observations - Given a City ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param cityId City ID. Example: 4487042
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenACityIdLimit1DayForLowVolumePlansLimit7DaysForB(
        cityId?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/daily?city_id={city_id}',
            path: {
                'city_id': cityId,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Daily IP
     * Returns Historical Observations - Given IP Address, or auto. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param ip IP Address, or auto. Example: ip=auto
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenIpAddressOrAutoLimit1DayForLowVolumePlansLimit7D(
        ip?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/daily?ip={ip}',
            path: {
                'ip': ip,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Daily Lat & Lon
     * Returns Historical Observations - Given a lat, and lon. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenALatAndLonLimit1DayForLowVolumePlansLimit7DaysF(
        lat?: any,
        lon?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/daily?lat={lat}&lon={lon}',
            path: {
                'lat': lat,
                'lon': lon,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Daily Postla Code Code
     * Returns Historical Observations - Given a Postal Code. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param postalCode Postal Code. Example: 28546
     * @param country Country Code (2 letter).
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenAPostalCodeLimit1DayForLowVolumePlansLimit7DaysF(
        postalCode?: any,
        country?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/daily?postal_code={postal_code}',
            path: {
                'postal_code': postalCode,
            },
            query: {
                'country': country,
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Daily Station Station
     * Returns Historical Observations - Given a station ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param station Station ID.
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenAStationIdLimit1DayForLowVolumePlansLimit7DaysFo(
        station?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/daily?station={station}',
            path: {
                'station': station,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Energy Bbox Lat1 Lat1 &lon1 Lon1 &lat2 Lat2 &lon2 Lon2
     * Returns aggregate energy specific historical weather fields, over a specified time period. Supply a bounding box ex: lat1=40&lon1=-78&lat2=38&lon2=-80. This API will return UP TO 150 stations, aggregated by the specified time period start_date to end_date.
     * @param lat1 Latitude of upper left corner.
     * @param lon1 Longitude of upper left corner.
     * @param lat2 Latitude of lower right corner.
     * @param lon2 Longitude of lower right corner.
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsAggregateEnergySpecificHistoricalWeatherFieldsOverASpecifiedTimePeriodSupplyABo(
        lat1?: any,
        lon1?: any,
        lat2?: any,
        lon2?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/energy/bbox?lat1={lat1}&lon1={lon1}&lat2={lat2}&lon2={lon2}',
            path: {
                'lat1': lat1,
                'lon1': lon1,
                'lat2': lat2,
                'lon2': lon2,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Energy Lat & Lon
     * Returns aggregate energy specific historical weather fields, over a specified time period.
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsAggregateEnergySpecificHistoricalWeatherFieldsOverASpecifiedTimePeriod(
        lat?: any,
        lon?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/energy?lat={lat}&lon={lon}',
            path: {
                'lat': lat,
                'lon': lon,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Hourly City & Country
     * Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param city City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
     * @param state Full name of state.
     * @param country Country Code (2 letter).
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenACityInTheFormatOfCitystOrCityTheStateAndCountry3(
        city?: any,
        state?: any,
        country?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/hourly?city={city}&country={country}',
            path: {
                'city': city,
                'country': country,
            },
            query: {
                'state': state,
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Hourly City
     * Returns Historical Observations - Given a City ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param cityId City ID. Example: 4487042
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenACityIdLimit1DayForLowVolumePlansLimit7DaysForB1(
        cityId?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/hourly?city_id={city_id}',
            path: {
                'city_id': cityId,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Hourly IP
     * Returns Historical Observations - Given IP Address, or auto. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param ip IP Address, or auto. Example: ip=auto
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenIpAddressOrAutoLimit1DayForLowVolumePlansLimit7D1(
        ip?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/hourly?ip={ip}',
            path: {
                'ip': ip,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Hourly Lat & Lon
     * Returns Historical Observations - Given a lat, and lon. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenALatAndLonLimit1DayForLowVolumePlansLimit7DaysF1(
        lat?: any,
        lon?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/hourly?lat={lat}&lon={lon}',
            path: {
                'lat': lat,
                'lon': lon,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Hourly Postal Code
     * Returns Historical Observations - Given a Postal Code. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param postalCode Postal Code. Example: 28546
     * @param country Country Code (2 letter).
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenAPostalCodeLimit1DayForLowVolumePlansLimit7DaysF1(
        postalCode?: any,
        country?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/hourly?postal_code={postal_code}',
            path: {
                'postal_code': postalCode,
            },
            query: {
                'country': country,
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get History Hourly Station Station
     * Returns Historical Observations - Given a station ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**
     * @param station Station ID.
     * @param startDate Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param endDate End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
     * @param units Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
     * @param lang Language (Default: English) See <a href='/api/requests'>language field description</a>
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsHistoricalObservationsGivenAStationIdLimit1DayForLowVolumePlansLimit7DaysFo1(
        station?: any,
        startDate?: any,
        endDate?: any,
        units?: any,
        lang?: any,
        callback?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/hourly?station={station}',
            path: {
                'station': station,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
                'units': units,
                'lang': lang,
                'callback': callback,
                'key': key,
            },
        });
    }

    /**
     * Get IP
     * Returns a geolocation object. Given an IP address. If no IP supplied, will use request IP address.
     * @param ip IP Address, or auto. Example: ip=auto
     * @param callback Wraps return in jsonp callback. Example: callback=func
     * @param exclude exclude=all => return IP address only
     * @param format &format=none => return IP address as string
     * @param key Your registered API key.
     * @throws ApiError
     */
    public static returnsAGeolocationObjectGivenAnIpAddressIfNoIpSuppliedWillUseRequestIpAddress(
        ip?: any,
        callback?: any,
        exclude?: any,
        format?: any,
        key?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ip?ip={ip}',
            path: {
                'ip': ip,
            },
            query: {
                'callback': callback,
                'exclude': exclude,
                'format': format,
                'key': key,
            },
        });
    }

}
