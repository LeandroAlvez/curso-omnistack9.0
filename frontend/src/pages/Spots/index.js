import React, { useEffect } from 'react';
import api from '../../services/api';

 export default function Spots() {
     useEffect(() => {
          async function carregarSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/spots', {
            headers: { user_id }
            });
            console.log(response)
          }

          carregarSpots();
     }, []);

     return  <div />
 }