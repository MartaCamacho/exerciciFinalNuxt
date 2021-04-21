<template>
        <div id="nav">
      <b-navbar toggleable="lg" type="dark" align="center"  variant="info">
        <b-navbar-brand><nuxt-link to="/">🖤</nuxt-link></b-navbar-brand>
        
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item><nuxt-link to="/">Home</nuxt-link></b-nav-item>
            <b-nav-item><nuxt-link to="/Users">Users</nuxt-link></b-nav-item>
            <b-nav-item><nuxt-link to="/Pictures">Pictures</nuxt-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        
         <b-nav-form right>
          <b-form-input size="sm" class="mr-sm-2" value="search" placeholder="Nom d'usuari" v-model="SearchForm"></b-form-input>
          <nuxt-link to="/UserNotFound">
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </nuxt-link>
          
        </b-nav-form>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </b-navbar>
    </div>
</template>

<script src="@/scripts/Header.js">