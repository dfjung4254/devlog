package com.devjk.devlog.config.db;

import com.zaxxer.hikari.HikariDataSource;
import java.util.Map;
import java.util.Objects;
import javax.sql.DataSource;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateProperties;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateSettings;
import org.springframework.boot.autoconfigure.orm.jpa.JpaProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@RequiredArgsConstructor
@EnableJpaRepositories(
    entityManagerFactoryRef = "devlogEntityManagerFactory",
    transactionManagerRef = "devlogTransactionManager",
    basePackages = "com.devjk.devlog.core.db.devlog.repository"
)
public class DevlogConfig {

  private final Environment env;
  private final JpaProperties jpaProperties;
  private final HibernateProperties hibernateProperties;

  @Primary
  @Bean
  public DataSource devlogDataSource() {
    HikariDataSource dataSource = new HikariDataSource();
    dataSource.setDriverClassName(
        Objects.requireNonNull(env.getProperty("spring.devlog.datasource.driver-class-name"))
    );
    dataSource.setJdbcUrl(env.getProperty("spring.devlog.datasource.url"));
    dataSource.setUsername(env.getProperty("spring.devlog.datasource.username"));
    dataSource.setPassword(env.getProperty("spring.devlog.datasource.password"));
    return dataSource;
  }

  @Primary
  @Bean
  public LocalContainerEntityManagerFactoryBean devlogEntityManager(EntityManagerFactoryBuilder builder) {
    Map<String, Object> properites = hibernateProperties.determineHibernateProperties(
        jpaProperties.getProperties(), new HibernateSettings()
    );

    return builder.dataSource(devlogDataSource())
        .properties(properites)
        .packages("com.devlog.core.db.devlog.entity")
        .persistenceUnit("devlog")
        .build();
  }

  @Primary
  @Bean
  public PlatformTransactionManager devlogTransactionManager(EntityManagerFactoryBuilder builder) {
    return new JpaTransactionManager(
        Objects.requireNonNull(devlogEntityManager(builder).getObject()));
  }

}
