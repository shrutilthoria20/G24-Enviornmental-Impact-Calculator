"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from "next-auth/react";

export default function show_result_module() {
    const [resultData, setResultData] = useState([]);

    const {data: session } = useSession();
    
    useEffect(() => {
        fetch('/api/fetch-result', {
          method: 'POST', // specify the HTTP method as POST
          headers: {
            'Content-Type': 'application/json', // specify the content type as JSON
          },
          body: JSON.stringify({session}), // specify the request body if needed
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setResultData(data.result_data || []);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);

  return (        
    <>
    {resultData.map((t, index) => ( 
     <div key={index}>
    <main className="p-6 sm:p-10 space-y-6 bg-gradient-to-r from-red-100 via-green-100 to-blue-100 h-max" >                    
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Your Carbon Footprint</h1>
            <h2 className="text-gray-600 ml-0.5">Result</h2>
          </div>          
        </div>

        <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
              </svg>              
            </div>
            <div>
              <span className="block text-2xl font-bold">Username</span>
              <span className="block text-gray-500">{t.username}</span>              
            </div>            
        </div>

        <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-500 bg-purple-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="text-purple-100" viewBox="0 0 45 45" stroke="currentColor" className="h-8 w-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M24.155 8.78099L24.33 8.94499L37.402 21.787L36 23.213L34.2 21.445L34.201 35C34.201 36.054 33.385 36.918 32.35 36.994L32.201 37H12.201C11.147 37 10.283 36.184 10.206 35.149L10.201 35L10.2 21.446L8.402 23.213L7 21.787L20.058 8.95799C21.171 7.82199 22.966 7.75899 24.155 8.78099ZM21.569 10.285L21.473 10.372L12.2 19.481L12.201 35L17.2 34.999L17.201 25C17.201 23.946 18.017 23.082 19.052 23.005L19.201 23H25.201C26.255 23 27.119 23.816 27.196 24.851L27.201 25L27.2 34.999L32.201 35L32.2 19.48L22.901 10.344C22.537 9.98699 21.969 9.96499 21.569 10.285ZM25.201 25H19.201L19.2 34.999H25.2L25.201 25Z"/>
              </svg>              
            </div>
            <div>
              <span className="block text-2xl font-bold">Residency</span>
              <span className="block text-gray-500">{t.residency}</span>
            </div>            
        </div>

        

        <section className="grid sm:grid-clos-1 md:grid-cols-2 gap-10">
          <div className="flex items-center p-8 bg-white shadow rounded-lg w-auto">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="" viewBox="0 0 30 30" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.867 15.467c-1.173 0-2.133 0.96-2.133 2.133s0.96 2.133 2.133 2.133 2.133-0.96 2.133-2.133-0.96-2.133-2.133-2.133zM5.867 18.667c-0.587 0-1.067-0.48-1.067-1.067s0.48-1.067 1.067-1.067c0.587 0 1.067 0.48 1.067 1.067s-0.48 1.067-1.067 1.067z M22.933 15.467c-1.173 0-2.133 0.96-2.133 2.133s0.96 2.133 2.133 2.133c1.173 0 2.133-0.96 2.133-2.133s-0.96-2.133-2.133-2.133zM22.933 18.667c-0.587 0-1.067-0.48-1.067-1.067s0.48-1.067 1.067-1.067c0.587 0 1.067 0.48 1.067 1.067s-0.48 1.067-1.067 1.067z M25.12 11.2l-0.907-4.267c-0.373-1.387-1.44-2.133-2.88-2.133h-13.867c-1.493 0-2.347 0.747-2.773 2.133l-0.96 4.267h-3.733v1.067h3.467v0.053c-1.653 0.107-2.933 1.493-2.933 3.2v7.413h1.6v1.6c0 1.493 1.173 2.667 2.667 2.667s2.667-1.173 2.667-2.667v-1.6h13.867v1.6c0 1.493 1.173 2.667 2.667 2.667s2.667-1.173 2.667-2.667v-1.6h1.6v-7.413c0-1.653-1.28-3.040-2.88-3.2v-0.053h3.413v-1.067h-3.68zM5.707 7.253c0.32-0.96 0.8-1.387 1.76-1.387h13.867c1.013 0 1.6 0.427 1.867 1.333l1.067 5.12h-19.733l1.173-5.067zM6.4 24.533c0 0.907-0.693 1.6-1.6 1.6s-1.6-0.693-1.6-1.6v-1.6h3.2v1.6zM25.6 24.533c0 0.907-0.693 1.6-1.6 1.6s-1.6-0.693-1.6-1.6v-1.6h3.2v1.6zM27.2 15.52v6.347h-25.6v-6.347c0-1.173 0.96-2.133 2.133-2.133h21.333c1.173 0 2.133 0.96 2.133 2.133z" />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">Car Emission</span>
              <span className="block text-gray-500">
                <p>Emission: {t.car_emission} Kg Co2</p>
                <p>Engine Type: {t.car_engine_type}</p>
                <p>Travel Per Week: {t.car_travel_per_year} Kms</p>
                <p><b>Feedback :</b> {t.car_engine_type === 'Petrol' | t.car_engine_type === 'Diesel'  ? 'Try to use Electric or Bio-fuel vehical as it will not not emit large carbon' : 'It is good as you are using electic or bio-fuel vehical'}</p>
              </span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg w-auto">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 35 35" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.542,8.382L2.958,4.902l-1.25,1.26c-0.18,0.17-0.14,0.45,0.07,0.58l11.083,6.465 M17.884,17.581l7.374,12.642c0.13,0.209,0.41,0.25,0.58,0.07l1.26-1.25l-3.903-16.359 M9.134,19.857l-6.336-0.715l-1.19,1.189c-0.18,0.18-0.13,0.48,0.09,0.6l3.787,1.975 M8.109,24.625l2.958,5.677c0.12,0.221,0.42,0.271,0.6,0.091l1.19-1.19l-0.715-6.333 M7.328,24.673l0.4-0.011c0.12-0.01,2.81-0.14,4.88-2.22c0.63-0.58,14.51-13.32,15.99-14.811c2.2-2.2,2.15-5.149,1.54-5.77 c-0.61-0.61-3.58-0.66-5.77,1.54c-1.5,1.5-14.23,15.359-14.82,16c-0.644,0.649-1.104,1.354-1.43,2.024 M27.498,3.502c0.552,0,1,0.448,1,1" />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">Flight Emission</span>
              <span className="block text-gray-500">
                <p>Emission: {t.flight_emission} Kg Co2</p>
                <p>Trip Type: {t.flight_trip_type}</p>
                <p>Flights Per Year: {t.flight_per_year}</p>
                <p><b>Feedback :</b> {t.flight_trip_type === 'Short-Haul' ? 'Instead you should use public transport train' : t.flight_trip_type === 'Medium-Haul' ? 'If not urget then please prefer pt_train' : ''}</p>
              </span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg w-auto">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="red" viewBox="0 0 35 35" stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} d="M25,18c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S28.9,18,25,18z M28.8,24.8l-3.5,1.2C25.2,26,25.1,26,25,26 c-0.2,0-0.4-0.1-0.6-0.2C24.2,25.6,24,25.3,24,25v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v2.6l2.2-0.7c0.5-0.2,1.1,0.1,1.3,0.6 C29.6,24,29.3,24.6,28.8,24.8z M16,25c0-5,4-9,9-9c1.1,0,2.1,0.2,3,0.5V9.6l2,1V15c0,0.6,0.4,1,1,1s1-0.4,1-1v-5c0-0.4-0.2-0.7-0.6-0.9L28,7.4V6 c0-2.8-2.2-5-5-5H9C6.2,1,4,3.2,4,6v1.4L0.6,9.1C0.2,9.3,0,9.6,0,10v5c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.4l2-1V23c0,0.9,0.4,1.7,1,2.2 V27c0,1.7,1.3,3,3,3h2c1.7,0,3-1.3,3-3v-1h3.1C16,25.7,16,25.3,16,25z M13,21.2c-0.1,0.5-0.5,0.8-1,0.8c-0.1,0-0.2,0-0.2,0l-4-1 c-0.5-0.1-0.9-0.7-0.7-1.2c0.1-0.5,0.7-0.9,1.2-0.7l4,1C12.8,20.2,13.1,20.7,13,21.2z M6,14.3V6c0-1.7,1.3-3,3-3h14c1.7,0,3,1.3,3,3 v8.3C19.5,16.5,12.5,16.5,6,14.3z" />
              </svg>
            </div>
            <div>
              <span className="inline-block text-2xl font-bold">Public Transport Emission</span>              
              <span className="block text-gray-500">
                <p>Emission: {t.pt_emission} Kg Co2</p>
                <p>Transport Type: {t.public_transport_type}</p>
                <p>Travel Per Week: {t.public_transport_per_week} Kms</p>
                <p><b>Feedback :</b> Its good as you are using public transport when needed</p>
              </span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg w-auto">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="blue" viewBox="0 0 508 508" stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M435.2,264.533c-10.129,0-19.78,2.022-28.646,5.598l-18.961-35.217c15.181-5.035,48.213-12.681,77.73,3.021 c4.147,2.219,9.336,0.64,11.546-3.524c2.219-4.156,0.631-9.327-3.524-11.546c-12.74-6.775-25.788-9.924-38.144-10.982v-15.616 c0-1.937-0.657-3.814-1.869-5.333l-34.133-42.667c-1.621-2.022-4.07-3.2-6.665-3.2h-11.29l-14.916-37.308 c-1.306-3.234-4.437-5.359-7.927-5.359h-59.733c0-4.71-3.814-8.533-8.533-8.533S281.6,97.69,281.6,102.4h-8.533 c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533h8.533c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533 h25.6v25.6h-25.6c-2.27,0-4.437,0.896-6.033,2.5l-31.206,31.206l-138.018-16.239l-14.976-14.967c-1.596-1.604-3.763-2.5-6.033-2.5 H76.8c-2.27,0-4.437,0.896-6.033,2.5l-14.566,14.566H34.133c-4.719,0-8.533,3.823-8.533,8.533V204.8 c0,4.71,3.814,8.533,8.533,8.533h57.856l104.277,48.128v39.185l-47.991,12.8c-11.187-28.587-38.972-48.913-71.475-48.913 c-42.351,0-76.8,34.458-76.8,76.8s34.449,76.8,76.8,76.8c42.351,0,76.8-34.458,76.8-76.8c0-3.883-0.384-7.663-0.939-11.401 l43.605-11.622v14.49c0,4.71,3.814,8.533,8.533,8.533h119.467c3.234,0,6.187-1.826,7.637-4.719l43.844-87.688l15.787,29.312 c-19.994,13.875-33.135,36.966-33.135,63.095c0,42.342,34.449,76.8,76.8,76.8s76.8-34.458,76.8-76.8 C512,298.991,477.551,264.533,435.2,264.533z M76.8,401.067c-32.93,0-59.733-26.795-59.733-59.733 c0-32.939,26.803-59.733,59.733-59.733c24.602,0,45.773,14.959,54.912,36.258L74.598,333.09c-4.548,1.22-7.262,5.888-6.042,10.445 c1.015,3.814,4.471,6.332,8.235,6.332c0.734,0,1.468-0.094,2.21-0.29l57.088-15.223c0.265,2.295,0.444,4.617,0.444,6.98 C136.533,374.272,109.73,401.067,76.8,401.067z M435.2,401.067c-32.93,0-59.733-26.795-59.733-59.733 c0-19.635,9.566-37.035,24.235-47.923l27.981,51.968c1.545,2.867,4.489,4.489,7.526,4.489c1.365,0,2.748-0.324,4.036-1.024 c4.147-2.236,5.709-7.407,3.473-11.554l-27.998-51.994c6.4-2.347,13.278-3.695,20.48-3.695c32.93,0,59.733,26.795,59.733,59.733 C494.933,374.272,468.13,401.067,435.2,401.067z" />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">Motorbike Emission</span>
              <span className="block text-gray-500">
                <p>Emission: {t.motorbike_emission} Kg Co2</p>
                <p>Engine Type: {t.motorbike_engine_type}</p>
                <p>Travel Per Week: {t.motorbike_travel_per_year} Kms</p>
                <p><b>Feedback :</b> {t.motorbike_engine_type === 'Petrol' ? 'When distance is between 2-3 kms then you should use either walk or cycling. As it is good for health and also decreases carbon emission' : 'It is good as you are using electic vehical but When distance is between 2-3 kms then you should use either walk or cycling'}</p>
              </span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg w-auto">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="blue" viewBox="0 0 508 508" stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M446.459,183.142c-1.517-2.077-3.986-3.256-6.547-3.119l-10.418,0.528V82.854c0-4.212-3.415-7.628-7.628-7.628h-21.162 c-4.212,0-7.628,3.415-7.628,7.628v99.54l-1.26,0.064h-0.001l-73.175,3.155l-28.786-27.589c1.569-10.232-0.835-20.522-6.833-29.07 c-1.398-1.992-2.958-3.825-4.648-5.503l3.436-24.048c5.539-0.367,10.755-2.592,14.891-6.442c4.754-4.425,7.501-10.42,7.733-16.879 l1.796-49.915c0.233-6.46-2.077-12.636-6.502-17.392c-4.425-4.755-10.419-7.501-16.879-7.733L254.35,0.015 c-13.397-0.469-24.644,10.008-25.125,23.381l-1.795,49.915c-0.233,6.46,2.077,12.636,6.502,17.392 c0.727,0.781,1.5,1.502,2.307,2.173l-2.809,15.438l-9.481-1.662c-0.718-0.126-1.432-0.191-2.143-0.227l4.938-28.175 c0.801-4.568-0.232-9.184-2.907-12.995c-2.675-3.812-6.664-6.351-11.233-7.152l-39.27-6.882 c-9.454-1.662-18.491,4.685-20.147,14.138l-2.294,13.096l-13.919-3.479c-2.047-0.513-4.214-0.153-5.984,0.991 c-1.772,1.143-2.992,2.969-3.369,5.043l-14.928,81.977c-0.725,3.98,1.782,7.832,5.714,8.781l15.48,3.739l-4.964,28.325 c-1.657,9.452,4.686,18.491,14.139,20.147l39.27,6.882c0.718,0.126,1.432,0.19,2.143,0.226l-5.857,33.422l-24.37,83.413 L86.23,413.064c-0.027,0.026-0.051,0.056-0.078,0.082c-0.011,0.011-0.024,0.021-0.037,0.033l-19.806,19.806 c-2.979,2.979-2.979,7.809,0,10.786l53.559,53.56c1.431,1.431,3.37,2.234,5.393,2.234c0.004,0,0.009,0,0.014,0 c2.028-0.004,3.97-0.815,5.399-2.254l5.985-6.029c7.024-7.076,7.654-18.308,1.464-26.126l-12.076-15.251l70.075-67.954 c0.029-0.027,0.057-0.056,0.084-0.084c1.036-1.036,1.98-2.161,2.879-3.432c2.393-2.945,4.098-6.272,5.053-9.838l19.541-70.605 l39.756,70.182V469.04v28.011c0,4.212,3.415,7.628,7.628,7.628h75.745c2.028,0,3.972-0.807,5.403-2.245 c1.431-1.437,2.231-3.384,2.224-5.411l-0.031-8.495c-0.038-9.972-7.534-18.358-17.439-19.509l-19.898-2.312V362.372 c0-1.464-0.128-2.927-0.391-4.464c-0.39-3.775-1.538-7.334-3.384-10.531l-43.225-76.306l9.287-53.003l16.711,16.711 c0.909,0.909,2.025,1.565,3.236,1.923c0.825,0.305,1.715,0.471,2.64,0.471c0.111,0,0.223-0.002,0.335-0.007l90.802-3.914v271.122 c0,4.212,3.415,7.628,7.628,7.628h21.162c4.212,0,7.628-3.415,7.628-7.628v-272.67c1.791-0.823,3.241-2.312,3.963-4.231 l13.979-37.145C448.344,187.92,447.976,185.219,446.459,183.142z M244.471,23.944c0.175-4.857,4.182-8.69,9.004-8.69 c0.109,0,0.219,0.002,0.328,0.006l28.501,1.025c2.17,0.078,4.2,0.938,5.79,2.424c-12.296,13.37-32.577,20.024-44.258,22.906 L244.471,23.944z M243.266,57.426c10.287-2.197,30.997-7.887,47.311-20.442l-1.387,38.548c-0.085,2.387-1.109,4.61-2.88,6.26 c-1.773,1.649-4.079,2.504-6.45,2.424l-28.502-1.024c-0.958-0.035-1.887-0.227-2.765-0.55c-0.443-0.267-0.918-0.49-1.421-0.664 c-0.758-0.443-1.456-1.003-2.074-1.666c-1.65-1.773-2.51-4.063-2.424-6.451L243.266,57.426z M266.458,98.999l-2.202,15.406 c-2.281-0.849-4.653-1.504-7.1-1.933l-8.702-1.524l2.277-12.515c0.026,0.001,0.052,0.004,0.078,0.005L266.458,98.999z M136.524,160.45l-7.533-1.818L141.17,91.75l7.083,1.771L136.524,160.45z M145.694,208.953c-1.147-0.2-1.948-1.34-1.746-2.488 l24.266-138.472c0.201-1.147,1.341-1.945,2.489-1.746l39.27,6.882c1.147,0.2,1.948,1.34,1.746,2.488l-17.782,101.472 l-6.484,37.001c-0.201,1.147-1.339,1.945-2.488,1.745L145.694,208.953z M126.163,474.626c1.4,1.769,1.258,4.308-0.331,5.909 l-0.592,0.596l-42.752-42.753l8.356-8.356l18.942,23.922c0.005,0.007,0.011,0.013,0.016,0.02L126.163,474.626z M189.421,364.588 c-0.424,1.584-1.189,3.047-2.272,4.347c-0.147,0.176-0.287,0.36-0.417,0.549c-0.419,0.606-0.837,1.119-1.278,1.564l-68.924,66.837 l-14.733-18.607l64.476-61.749c0.965-0.924,1.671-2.087,2.046-3.369l23.147-79.225l21.266,3.726l0.317,0.559L189.421,364.588z M335.204,484.168c2.242,0.26,3.937,2.158,3.945,4.413l0.003,0.839h-60.461v-11.818L335.204,484.168z M304.655,221.794 l-70.773-70.773c-2.979-2.979-7.809-2.979-10.786,0c-2.979,2.979-2.979,7.809,0,10.786l43.083,43.083l-11.608,66.242 c-0.305,1.742,0.004,3.537,0.876,5.076l44.605,78.742c0.821,1.421,1.314,2.996,1.466,4.682c0.021,0.228,0.052,0.455,0.093,0.679 c0.136,0.745,0.202,1.42,0.202,2.06v102.559l-23.121-2.686v-96.082c0-1.318-0.341-2.613-0.991-3.76l-49.818-87.945 c-0.003-0.006-0.006-0.011-0.01-0.017l-3.045-5.375c-0.074-0.131-0.135-0.266-0.2-0.401l-0.129-0.263 c-1.077-2.18-3.128-3.715-5.522-4.135l-24.09-4.222l23.941-136.621c0.201-1.147,1.339-1.943,2.488-1.746l16.185,2.836 c0.23,0.064,0.464,0.121,0.704,0.165c0.269,0.049,0.536,0.078,0.802,0.099l15.518,2.72c6.5,1.139,12.185,4.768,16.011,10.219 c0.89,1.268,1.648,2.599,2.28,3.974l-9.657-9.255c-3.041-2.915-7.87-2.812-10.784,0.229s-2.813,7.87,0.229,10.784l57.835,55.431 c1.502,1.44,3.533,2.2,5.607,2.114l68.809-2.967l0.874,20.271L304.655,221.794z M408.333,90.481h5.907v90.622h-5.907V90.481z M414.24,496.745h-5.907V233.218h5.907V496.745z M420.992,217.287l-20.018,0.493l-0.883-20.467l18.866-0.955h2.911 c0.649,0,1.275-0.089,1.877-0.242l5.316-0.269L420.992,217.287z" />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">Self Transport Emission</span>
              <span className="block text-gray-500">
                <p>Emission: {t.st_emission} Kg Co2</p>
                <p>Transport Type: {t.self_transport_type}</p>
                <p>Travel Per Day: {t.self_transport_travel_per_day} Kms</p>
                <p><b>Feedback :</b> It is good for your health and also decreases carbon emission</p>
              </span>
            </div>
          </div>          

          <div>
          
          </div>
        </section>
        
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-500 bg-purple-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="red" viewBox="0 0 1024 1024" stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z" />
              </svg>            
            </div>
            <div>
              <span className="block text-2xl font-bold">How to Overcome Your Enviornmental Impact</span>
              <span className="block text-gray-500">
                <p>Number of Tress you should plant to Offset your Carbon Footprint ... <b>{t.trees_needed}</b></p>
                <p><b>Total Co2 Emission :</b> {t.total_emission} Kg Co2</p>
                <p style={{ whiteSpace: 'pre-line' }}>{(t.avg_annual_red > 0)? ((t.avg_annual_red < t.total_emission) ? `Average Annual Emissions Reduction Required to Reach Net-Zero by 2050 is ${t.avg_annual_red} Kg CO2 equivalent.
                Your emissions exceed the average annual reduction required to reach net-zero emissions by 2050. Further efforts are needed to align with sustainable targets.
                ` :'') :'Your emissions are already at or below the level required for net-zero emissions by 2050.'}</p>                
              </span>
            </div>            
        </div>

          

        <div className='flex justify-center pt-3 mt-16'>
              <Link href="/Download-pdf" target='_blank' rel='noopener noreferrer'>              
                <button className='border rounded-lg shadow-md bg-green-500 hover:bg-green-600 font-semibold px-8 py-2 hover:text-white'>
                    Generate PDF
                </button>                
                </Link>

                <Link href="/" rel='noopener noreferrer'>              
                <button className='border rounded-lg shadow-md bg-blue-300 hover:bg-blue-500 font-semibold px-8 py-2 hover:text-white ml-20'>
                    Back to Home Page
                </button>                
                </Link>
        </div>


        
      </main>
</div>
))} 

</>

  );
}
